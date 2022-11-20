import React, {useState, useEffect} from "react";
import "./PokemonSearch.css";
import {Autocomplete, Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getPokemons, GET_POKEMONS, URL} from "../../Common/api";
import {extractData} from "../../Common/extractData";
import * as types from "../../Common/redux/actionType";
import SearchIcon from '@mui/icons-material/Search';
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import AbilityCard from "../PokemonDetails/AbilityCard";
import {Link} from "react-router-dom";

export default function PokemonSearch() {
    const [pokemonList, setPokemonList] = useState([]);
    const [inputValue, setValueInput] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        getPokemons(`${URL}/${inputValue}`).then(({data}) => {
            dispatch({type: types.SET_POKEMON, payload: extractData(data)});
        });
    }

    useEffect(() => {
        getPokemons(GET_POKEMONS)
            .then(({data}) => {
                const listData = data.results.map((item) => ({
                    ...item,
                    label: item.name,
                }));

                setPokemonList(listData);
            })
            .catch((Error) => {
                console.error(Error);
            });
    }, []);


    return <div className={"search-container"}>
        <Link to={"/"}>
            <h1>All Pokemons</h1>
        </Link>

        <Box

            sx={{
                display: "flex",
                flexDirection: "row",
                width: "30%",
                p: 3,
                borderRadius: 1,
                alignItems: "center"
            }}
            component="form"
            onSubmit={handleSubmit}
        >
            <Autocomplete
                disablePortal
                underlineStyle={{display: "none"}}
                options={pokemonList}
                sx={{width: 300, color: "black"}}
                onChange={(e, newEvent) => setValueInput(newEvent.name)}
                renderInput={(params) => (
                    <TextField {...params} label="Search your Pokemon"/>
                )}
            />
            <Button type="submit" className={"search-btn"}>
                <SearchIcon/>
            </Button>
        </Box>
        <div className={"d-flex"}>
            <PokemonDetails/>
            <AbilityCard/>
        </div>
    </div>
}