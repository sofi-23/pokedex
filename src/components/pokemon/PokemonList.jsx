import React from 'react';
import PokemonCard from './PokemonCard';
import { useState, useEffect } from 'react'

export default function PokemonList () {

    const [allPokemon, setAllPokemon] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');

    const getAllPokemon = async () => {
        const res = await fetch(loadMore);
        const data = await res.json(); 
        console.log(data)
        setLoadMore(data.next)
        function createPokemonObject (result) {
            result.forEach(async (pokemon) => {
                const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemon(currentList => [...currentList, data])
                console.log(allPokemon)
            })
        }
        createPokemonObject(data.results)
    }
    useEffect(() => {
        getAllPokemon()
    }, [])
    
    return (
        <div>
        <div className="row pokemonListContainer">
            {allPokemon.map((pokemon, index) => 
            <PokemonCard name={pokemon.name} id={pokemon.id} type={pokemon.types[0].type.name} img={pokemon.sprites.other.dream_world.front_default} key={index} />
            )}
        </div>
        <div className="d-flex justify-content-center">
        <button className="loadMore btn btn-danger mb-5" onClick={() => getAllPokemon()} >Load More</button>
        </div>
        </div>
    )
}