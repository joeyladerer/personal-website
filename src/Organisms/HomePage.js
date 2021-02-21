import React from "react"
import {Box, Center} from "@chakra-ui/react"
import HomePhoto from "../Molecules/HomePhoto";
import '../CSS Files/HomePage.css'
import HomeNameAndDescription from "../Molecules/HomeNameAndDescription";
import HomeNavBar from "../Molecules/HomeNavBar";
import ProfileImage from '../Images/mainprofilebest.png'

function HomePage() {
    return (
        <Box>
            <Center>
            <HomeNavBar/>
            </Center>
            <Center>
            <div className={"Profile-Image"}>
                <img src={ProfileImage}/>
            </div>
            </Center>
            <HomeNameAndDescription/>
        </Box>
    )
}

export default HomePage
