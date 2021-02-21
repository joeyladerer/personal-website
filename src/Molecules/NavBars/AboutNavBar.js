import React from "react"
import {Box, Button, ButtonGroup} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import '../../CSS Files/Nav.css'

import NavButton from "../../Atoms/NavButton";

function AboutNavBar() {
    return (
        <Box className="Nav">
            <Box className="Nav-Box"/>
            <Box className={"Nav-Text"}>
                <Link to={"/"}>
                    <NavButton text={"home"} color={"white"}/>
                </Link>
                <Link to={"/music"}>
                    <NavButton text={"music"} color={"white"}/>
                </Link>
                <Link to={"/about"}>
                    <NavButton text={"about me"} color={"#FFF38A"}/>
                </Link>
                <Link to={"/gallery"}>
                    <NavButton text={"gallery"} color={"white"}/>
                </Link>
                <Link to={"/resume"}>
                    <NavButton text={"resume"} color={"white"}/>
                </Link>
            </Box>
        </Box>
    )
}

export default AboutNavBar