import { useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";

import songs from '../data/songs.json'
import "../styles/admin.css"

function Admin() {

    const [allSongs, setAllSongs] = useState(Object.values(songs).flat().map(
        song => ({
            ...song,
            played: false
        })))



    const togglePlayed = (song)=> {
        setAllSongs(prev =>
            prev.map(s =>
                s === song ? {...s, played: !s.played} : s
            )
        )
    }

    const checkedTemplate = (rowData)=>{
        return (
            <Checkbox checked={rowData.played} onChange={()=> togglePlayed(rowData)}/>
        )
    }

    const rowClassName = (rowData) => {
        return rowData.played ? 'song-played' : ''
    }

    return (
        <section className="flex flex-column align-items-center">
            <h2>
                Lista de Canciones
            </h2>
            <article className="w-5">
                <DataTable value={allSongs} className="text-center" rowClassName={rowClassName}>
                    <Column field="title" header='Título' filter/>
                    <Column field="author" header='Autor'/>
                    <Column body={checkedTemplate} header='Salida' sortable/>
                </DataTable>
            </article>
        </section>
    )
}

export default Admin