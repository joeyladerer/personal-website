import React from "react"
import {Box, Center} from "@chakra-ui/react"
import '../CSS Files/HomePage.css'
import ResumeNavBar from "../Molecules/NavBars/ResumeNavBar";

function Resume() {
    return (
        <Box>
            <Center>
                <ResumeNavBar/>
            </Center>
            <Center>
                <h1 style={{color: "white"}}>a page with a resume!</h1>
            </Center>
        </Box>
    )
}

export default Resume
