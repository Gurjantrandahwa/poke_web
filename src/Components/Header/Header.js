import React from "react";
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import {Link} from "react-router-dom";
export default function Header() {
    return <div className={"header"}>
        <Navbar  variant="dark" className={"nav-wrapper"}>
<Link to={"/"}>
              <img src={"https://i.pinimg.com/564x/2b/b4/9a/2bb49a57c41dff2c58b88c4849c59ac7.jpg"}
                   width={80} alt={""}/>
</Link>
                <Nav className="me-auto">
                    <Nav.Link href={"/search"} className={"search"}>Search Your Pokemon</Nav.Link>

                </Nav>

        </Navbar>

    </div>
}