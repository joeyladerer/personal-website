import React from "react"
import {Box, Button, ButtonGroup} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import '../CSS Files/Nav.css'

import NavButton from "../Atoms/NavButton";

function HomeNavBar() {
    return (
        <Box className="Nav">
            <Box className="Nav-Box"/>
            <Box className={"Nav-Text"}>
                <Link to={"/"}>
                    <NavButton text={"home"}/>
                </Link>
                <Link to={"/music"}>
                    <NavButton text={"music"}/>
                </Link>
                <Link to={"/about"}>
                    <NavButton text={"about me"}/>
                </Link>
                <Link to={"/gallery"}>
                    <NavButton text={"gallery"}/>
                </Link>
                <Link to={"/resume"}>
                    <NavButton text={"resume"}/>
                </Link>
            </Box>
        </Box>
    )
}

export default HomeNavBar