import React from "react"
import {Box, Center} from "@chakra-ui/react"
import MusicNavBar from "../Molecules/NavBars/MusicNavBar";

function Music() {
    return (
        <Box>
            <Center>
                <MusicNavBar/>
            </Center>
            <Center>
                <h1 style={{color: "white"}}>a page about music!</h1>
            </Center>
        </Box>
    )
}

export default Music
