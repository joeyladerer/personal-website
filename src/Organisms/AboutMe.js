import React from "react"
import {Box, Center} from "@chakra-ui/react"
import HomePhoto from "../Molecules/HomePhoto";
import '../CSS Files/HomePage.css'
import HomeNameAndDescription from "../Molecules/HomeNameAndDescription";
import AboutNavBar from "../Molecules/NavBars/AboutNavBar";
import ProfileImage from '../Images/mainprofilebest.png'

function AboutMe() {
    return (
        <Box>
            <Center>
                <AboutNavBar/>
            </Center>
            <Center>
                <h1 style={{color: "white"}}>a page about me!</h1>
            </Center>
        </Box>
    )
}

export default AboutMe
