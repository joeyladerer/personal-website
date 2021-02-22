import React from "react"
import {Box, Center} from "@chakra-ui/react"
import MusicNavBar from "../Molecules/NavBars/MusicNavBar";
import PageInfo from "../Molecules/PageInfo";

function Music() {
    return (
        <Box>
            <Center>
                <MusicNavBar/>
            </Center>
            <PageInfo text={
                "Music has always been a part of my life; from the moment i picked up the ukulele with my grandpa, " +
                "I knew music was something I loved. To this day, music stays part of my life. I produce using " +
                "Logic Pro X, and work on two separate musical endeavors: Joey Laderer (my solo project) and Sugar Drive."
            } />
        </Box>
    )
}

export default Music
