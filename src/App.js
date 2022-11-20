import './App.css';
import PokemonSearch from "./Components/PokemonSearch/PokemonSearch";
import Header from "./Components/Header/Header";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import AbilityCard from "./Components/PokemonDetails/AbilityCard";
import {Container} from "@mui/material";


function App() {
    return <Container maxWidth={"1300"}>
        <Header/>
        <PokemonSearch/>
        <div className={"d-flex"}>
            <PokemonDetails/>
            <AbilityCard/>
        </div>

    </Container>
}

export default App;
