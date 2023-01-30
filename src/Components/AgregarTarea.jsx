import React, { useState } from 'react'

const AgregarTarea = ({addTareas}) => {

    const [agregarTarea, setAgregarTarea] = useState('')

    const handleAgregarTarea = (e) => {
        setAgregarTarea(e.target.value);
    }
    const handleSumit = (e) => {
        e.preventDefault();
        if(agregarTarea.trim() !== ''){
            addTareas(agregarTarea);
            setAgregarTarea('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSumit}>
                <input type="text" value={agregarTarea} onChange={handleAgregarTarea}/>
                <button className='add-btn-1'>Agregar Tarea</button>
            </form>
        </div>
    )

}

export default AgregarTarea