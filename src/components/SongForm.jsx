import { useState } from 'react'
import { useRef } from 'react'

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { Toast } from 'primereact/toast'

function SongForm({ addSong, className }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [column, setColumn] = useState("")
  const columns = ['B','I','N','G','O']
  const toast = useRef(null)

  const showToast = (severity, summary, detail) => {
    toast.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000
    })
  }

  const handleSubmit = () =>{

    if (!title.trim() || !author.trim() || !column) {
      showToast("danger",'Error','Debe completar todos los campos.')
    }

    addSong(title, author, column)
    setTitle("")
    setAuthor("")
  }

  return (
    <>
      <Toast ref={toast}/>
      <div className={className}>
          <InputText type="text" placeholder='Titulo' value={title} onChange={(e)=> setTitle(e.target.value)} />
          <InputText type="text" placeholder='Autor' value={author} onChange={(e)=> setAuthor(e.target.value)}/>
          <Dropdown value={column} onChange={(e)=>setColumn(e.value)} options={columns} placeholder='Columna'/>
          <Button onClick={handleSubmit} label='Agregar canción'/>
      </div>
    </>
  )
}

export default SongForm