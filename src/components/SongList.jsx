import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { Button } from 'primereact/button'

function SongList({ songs, className, deleteSong, column }) {

    const header = ()=> {
        return (
            <p className='p-0 m-0 text-center text-white'>{column}</p>
        )
    }

    const deleteButtonTemplate = (rowData)=> {
        return (
            <Button 
                icon='pi pi-trash' 
                severity='danger'
                onClick={() => deleteSong(rowData.id, column)}
            />
        )
    }

    return (
        <DataTable value={songs} className={className} header={header}>
            <Column field='title' header='Título'/>
            <Column field='author' header='Autor'/>
            <Column body={deleteButtonTemplate} header='Acciones'/>
        </DataTable>
    )
}

export default SongList