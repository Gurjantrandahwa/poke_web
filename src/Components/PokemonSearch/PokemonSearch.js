import React, {useState, useEffect} from "react";
import "./PokemonSearch.css";
import {Autocomplete, Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getPokemons, GET_POKEMONS, URL} from "../../Common/api";
import {extractData} from "../../Common/extractData";
import * as types from "../../Common/redux/actionType";

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


    // const style = `display-section ${pokemon.type}`
    return <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "30%",
            p: 1,
            mr: 1,
            borderRadius: 1,

        }}
        component="form"
        onSubmit={handleSubmit}
    >
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            underlineStyle={{display: "none"}}
            options={pokemonList}
            sx={{width: 300, color: "white"}}
            onChange={(e, newEvent) => setValueInput(newEvent.name)}
            renderInput={(params) => (
                <TextField {...params} label="Search your Pokemon"/>
            )}
        />
        <Button variant="contained" type="submit">
            Search
        </Button>
    </Box>
}