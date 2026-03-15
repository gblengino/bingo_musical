import { useState } from 'react'
import { useEffect } from 'react'

import { Button } from 'primereact/button'

import SongForm from '../components/SongForm'
import SongList from '../components/SongList'
import { data } from 'react-router'


function Songs() {
  // La lista de canciones es una lista de objetos para seccionar que canciones van en cada columna
  const [songs, setSongs] = useState(() => {
    const saved = localStorage.getItem("bingoSongs")

    if (saved) {
      return JSON.parse(saved)
    }

    return {
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
    }
  })

  useEffect(()=> {
    localStorage.setItem("bingoSongs", JSON.stringify(songs))
  }, [songs])

  const addSong = (title, author, column)=>{

    const newSong = {
      id: crypto.randomUUID(),
      title: title,
      author: author
    }

    // Este metodo para agregar elementos a un array evita errores
    setSongs(prev => ({
      ...prev,
      [column]: [...prev[column], newSong]
    }))
  }

  const deleteSong = (id, column) => {
    setSongs(prev => ({
      ...prev,
      [column]: prev[column].filter(song => song.id !== id)
    }))
  }

  const exportSongs = ()=> {
    const dataStr = JSON.stringify(songs, null, 2)

    const blob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'songs.json'
    link.click()
  }

  return (
    <>
      <h1 className='w-full text-center'>Generador de cartas de Bingo Musical</h1>
      <section className='w-full m-auto'>
        <SongForm addSong={addSong} className='pb-3 flex justify-center gap-2'/>
      </section>
      <section className='w-full px-4 flex gap-2'>
        <SongList songs={songs.B} column="B" className='flex-1' deleteSong={deleteSong}/>
        <SongList songs={songs.I} column="I" className='flex-1' deleteSong={deleteSong}/>
        <SongList songs={songs.N} column="N" className='flex-1' deleteSong={deleteSong}/>
        <SongList songs={songs.G} column="G" className='flex-1' deleteSong={deleteSong}/>
        <SongList songs={songs.O} column="O" className='flex-1' deleteSong={deleteSong}/>
      </section>
      <section className='w-full flex justify-content-center pt-2'>
        <Button onClick={exportSongs} label='Exportar canciones'/>
      </section>
    </>
  )
}

export default Songs
