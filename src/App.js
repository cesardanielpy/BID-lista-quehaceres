import { useState } from 'react';
import './App.css';
import AgregarTarea from './Components/AgregarTarea';
import ListaQuehacer from './Components/ListaQuehacer';
import Pokemons from './Components/Pokemons';
import data from './data.json';



const App = () => {

  const [tareas, setTareas] = useState(data);
  const onComplete = (id) => {
    setTareas(tareas.map((tareas) => {
      return tareas.id === Number(id) ? { ...tareas, complete: !tareas.complete } : { ...tareas };
    }))
  }
  const borrarItem = (id) => {
    setTareas([...tareas].filter(tareas => tareas.id !== id))
  }
  const addTareas = (nuevaTarea) => {
    let nuevoItem = { id: +new Date(), task: nuevaTarea, complete: false };

    setTareas([...tareas, nuevoItem]);
  }

  console.log(tareas)
  return (
    <div className="App">
      <h1>POKEMONS API</h1>
      <Pokemons/>
      <hr />
      <h1>Lista de quehaceres</h1>
      <AgregarTarea addTareas={addTareas} />
      <ListaQuehacer tareas={tareas} onComplete={onComplete} borrarItem={borrarItem} />
    </div>
  );
}

export default App;
