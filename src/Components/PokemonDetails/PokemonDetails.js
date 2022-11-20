import React from "react";
import {Card, CardContent, Chip, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import "./pokemondetail.css"

export default function PokemonDetails() {
    const pokemon = useSelector((state) => state.pokemon);
    const style = `detail-card${pokemon.type}`;

    return <div className={style}>

        <Card className={"detail-card"}>
            <img
                src={pokemon.image}
                alt={pokemon.name}
            />
            <CardContent>
                <Typography  variant="h5">
                    {pokemon.name}
                </Typography>
                <Typography variant={"h6"} color={"orangered"}>
                    Pokemon Type : {pokemon.type}
                </Typography>
                <Card sx={{bgcolor:"black"}}>
                    <CardContent>
                        {pokemon.moves && (
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label={pokemon?.moves[0] || ""}
                                    color="primary"
                                    variant="outlined"
                                />
                                <Chip
                                    label={pokemon?.moves[1] || ""}
                                    color="secondary"
                                    variant="outlined"
                                />
                                <Chip
                                    label={pokemon?.moves[2] || ""}
                                    color="success"
                                    variant="outlined"
                                />
                            </Stack>
                        )}
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    </div>
}