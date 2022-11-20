import './App.css';
import PokemonSearch from "./Components/PokemonSearch/PokemonSearch";
import Allpokemons from "./Components/AllPokemons/Allpokemons";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import {Container} from "react-bootstrap";


function App() {
    return <BrowserRouter>
        <Container fluid>
            <Header/>
            <Routes>
                <Route path={"/search"} element={<PokemonSearch/>}/>
                <Route path={"/"} element={<Allpokemons/>}/>

            </Routes>
        </Container>


    </BrowserRouter>
}

export default App;
