import React from "react";
import "./Header.css"
import {AppBar, Stack} from "@mui/material";

export default function Header() {

    return <div className={"header"}>
        <Stack spacing={2} sx={{flexGrow: 1}}>

                <AppBar position="static" color="primary">
                    <img src={"https://i.pinimg.com/564x/2b/b4/9a/2bb49a57c41dff2c58b88c4849c59ac7.jpg"}
                         width={80} alt={""}/>
                </AppBar>

        </Stack>

    </div>
}
