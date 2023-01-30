import React from 'react'
import QuehacerItem from './QuehacerItem'

const ListaQuehacer = ({tareas,onComplete, borrarItem}) => {
    return (
        <div>
            {
                tareas.map((tareas,index)=> (
                    <QuehacerItem key={`Tarea-${index}`} tareas={tareas} onComplete={onComplete} borrarItem={borrarItem}/>
                ))
            }
        </div>
        
    )
}

export default ListaQuehacer