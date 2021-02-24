import React from "react"
import {Box, Center} from "@chakra-ui/react"
import HomePhoto from "../Molecules/HomePhoto";
import '../CSS Files/HomePage.css'
import HomeNameAndDescription from "../Molecules/HomeNameAndDescription";
import AboutNavBar from "../Molecules/NavBars/AboutNavBar";
import ProfileImage from '../Images/mainprofilebest.png'
import PageInfo from "../Molecules/PageInfo";

function AboutMe() {
    return (
        <Box>
            <Center>
                <AboutNavBar/>
            </Center>
            <Center>
            <PageInfo text={
                "I am currently attending the University of California, Berkeley, majoring in Electrical Engineering, " +
                "Computer Science, and Business Administration. When I’m not coding or studying, you can find me mountain biking, " +
                "slacklining, eating, exploring new places, editing videos, or jamming out to some music. Read on to learn " +
                "more about my projects, experiences, and skills!"
            } />
            </Center>
        </Box>
    )
}

export default AboutMe
