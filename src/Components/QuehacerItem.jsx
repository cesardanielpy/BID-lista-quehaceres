import React from 'react'

const QuehacerItem = ({tareas, onComplete, borrarItem}) => {
    const getStyle = () => {
        return{
            textDecoration: tareas.complete ? 'line-through' : 'none'
        }
    }
    return (
        <div className='task' style={getStyle()}>
            <input type='checkbox' checked={tareas.complete}
            onChange={()=> onComplete(tareas.id)}/>
            {tareas.task}
            ;<button className='add-btn-2' onClick={() =>borrarItem(tareas.id)}>Eliminar</button>
        </div>
    )
}

export default QuehacerItem