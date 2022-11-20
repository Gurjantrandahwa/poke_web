import './App.css';
import PokemonSearch from "./Components/PokemonSearch/PokemonSearch";
import Header from "./Components/Header/Header";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import AbilityCard from "./Components/PokemonDetails/AbilityCard";


function App() {
    return <div>
        <Header/>
        <PokemonSearch/>
        <PokemonDetails/>
        <AbilityCard/>
    </div>
}

export default App;
