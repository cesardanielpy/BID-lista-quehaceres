import React, { useState } from 'react'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const obtenerPokemons = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807%27")
            .then(response => {
                return response.json();
            }).then(response => {
                console.log(response.results);
                setPokemons(response.results.map((pokemon) => pokemon.name))
            }).catch(err => {
                console.log(err);
            });
    }
    return (
        <>
            <button onClick={obtenerPokemons}>Poke Api!</button>
            <ul>
                {
                    pokemons.map((pokemon, index) => <li key={index}><strong>{pokemon}</strong></li>)
                }
            </ul>
        </>
    )

}

export default Pokemons