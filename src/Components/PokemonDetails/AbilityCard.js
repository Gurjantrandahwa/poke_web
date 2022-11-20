import React from "react";
import {useSelector} from "react-redux";
import {
    Box,
    Card,
    CardContent,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    Typography
} from "@mui/material";

const Abilities = [
    "Hp",
    "Attack",
    "Defense",
    "Special-Attack",
    "Special-Defense",
    "Speed",
];
export default function AbilityCard() {
    const pokemon = useSelector((state) => state.pokemon);
    const getPokemonStat = (stats) => {
        const searchedStats = pokemon?.stats?.filter(
            (obj) => obj.name === stats.toLowerCase()
        );
        if (searchedStats) {
            return searchedStats[0].baseState;
        }
        return false;
    };
    return <div>
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <List
                    dense
                    sx={{width: "100%", maxWidth: 360}}
                >
                    {Abilities.map((value) => {
                        return (
                            <ListItem key={value} disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <img
                                            width={30}
                                            alt={value}
                                            style={{marginTop: "10px"}}
                                            src={"https://sf.ezoiccdn.com/ezoimgfmt/www.schemecolor.com/wp-content/uploads/Tyranitar.png?ezimgfmt=ng:webp/ngcb1"}
                                        />
                                    </ListItemAvatar>
                                    <Box key={value}>
                                        <Typography variant="h6" sx={{ml: 1}} className="nomes">
                                            {value} : {getPokemonStat(value)}
                                        </Typography>

                                        <LinearProgress
                                            variant="determinate"
                                            value={getPokemonStat(value)}
                                            sx={{
                                                width: 200,
                                                height: 10,
                                                mr: 5,
                                                ml: 1,
                                                background: "aliceblue",
                                            }}
                                        />
                                    </Box>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </CardContent>
        </Card>
    </div>
}