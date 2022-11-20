import './App.css';
import PokemonSearch from "./Components/PokemonSearch/PokemonSearch";
import Header from "./Components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    return <BrowserRouter>

        <Routes>
            <Route path={"/"} element={<Header/>} />
            <Route path={"/search"} element={  <PokemonSearch/>}/>


        </Routes>


    </BrowserRouter>
}

export default App;
