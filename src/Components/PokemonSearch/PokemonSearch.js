import React, {useEffect, useState} from "react";
import Axios from "axios";
import "./PokemonSearch.css";

export default function PokemonSearch(){
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonChoose, setPokemonChoose] = useState(false)
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        hp: "",
        attack: "",
        defence: "",
        type: "",
    })

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => {
                setPokemon({
                    name: pokemonName,
                    species: res.data.species.name,
                    img: res.data.sprites.front_default,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defence: res.data.stats[2].base_stat,
                    type: res.data.types[0].type.name,
                });
                setPokemonChoose(true)
            })
    }
    useEffect(() => {

    }, [])
    const style = `display-section ${pokemon.type}`
    return <div className={"container"}>
        <div className={"title-section"}>
            <h1>Pokemon Stats</h1>
            <input type={"text"}
                   onChange={(event) => {
                       setPokemonName(event.target.value)
                   }}/>
            <button onClick={searchPokemon}>Search Pokemon</button>
        </div>

        <div className={style}>
            <div className={"display-section"}>
                {!pokemonChoose ? (
                    <h2>Please Choose Pokemon</h2>
                ) : (
                    <>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.img} alt={""}/>
                        <h3>Species: {pokemon.species}</h3>
                        <h3>Type: {pokemon.type}</h3>
                        <h4>Hp: {pokemon.hp}</h4>
                        <h4>Attack: {pokemon.attack}</h4>
                        <h4>Defence: {pokemon.defence}</h4>
                    </>

                )}
            </div>
        </div>
    </div>
}