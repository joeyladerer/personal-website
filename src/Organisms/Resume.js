import React from "react"
import {Box, Center, Button} from "@chakra-ui/react"
import '../CSS Files/HomePage.css'
import ResumeNavBar from "../Molecules/NavBars/ResumeNavBar";
import PageInfo from "../Molecules/PageInfo";
import JoeyResume from '../Images/Screen Shot 2021-02-21 at 3.57.36 PM.png'

function Resume() {
    return (
        <Box>
            <Center>
                <ResumeNavBar/>
            </Center>
            <Center>
                <PageInfo text={""}/>
            </Center>
            <Center>
                <img src={JoeyResume} style={{margin: 20}}/>
            </Center>
            <Button
                color={"#FFF38A"}
                _hover={{backgroundColor: "#373737", color: "#FD9BFF", borderColor: "#FD9BFF"}}
                outline={"black"}
                variant={"outline"}
                borderColor={"#FFF38A"}
                onClick={() => window.open("https://drive.google.com/file/d/1ga7IpLlBdMHEZGHbFaK7DRwoBAmLnqId/view?usp=sharing", "_blank")}
            >click here to download as pdf
            </Button>
        </Box>
    )
}

export default Resume
