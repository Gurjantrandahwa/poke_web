import React from "react";
import {Card, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import { useSelector } from "react-redux";
export default function PokemonDetails() {
    const pokemon = useSelector((state) => state.pokemon);

    return<div>
        <Card sx={{ minWidth: 364 }}>
            <CardMedia
                component="img"
                height="140"
                width="240"
                sx={{ width: 300, height: 184 }}
                image={pokemon.image}
                alt={pokemon.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    POKEMON TYPE : {pokemon.type}
                </Typography>
                <Card>
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
                                    color="primary"
                                    variant="outlined"
                                />
                                <Chip
                                    label={pokemon?.moves[2] || ""}
                                    color="primary"
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