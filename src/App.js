import './App.css';
import {useEffect, useState} from "react";
import Thumbmail from "./Components/Thumbnail"

function App() {
    const [allPoke, setAllPoke] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')


    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)


        function createPokemon(result) {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setAllPoke(current => [...current, data])

            })
        }

        createPokemon(data.results)
        await console.log(allPoke)
    }
    useEffect(() => {
        getAllPokemons()
    }, [])

    return <div className={"app"}>
        <h1>Pokemon Evolution</h1>
        <div className={"pokemon_wrapper"}>
            {allPoke.map((poke, index) => {
                return <div key={index}>
                    <Thumbmail id={poke.id}
                               name={poke.name}
                               image={poke.sprites.other.dream_world.front_default}
                               type={poke.types[0].type.name}/>
                </div>
            })}
        </div>

        <div>
            <button onClick={() => getAllPokemons()}>Load More</button>
        </div>
    </div>
}

export default App;
