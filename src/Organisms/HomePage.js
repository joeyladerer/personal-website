import React from "react"
import {Box, Center} from "@chakra-ui/react"
import HomePhoto from "../Molecules/HomePhoto";
import '../CSS Files/HomePage.css'
import HomeNameAndDescription from "../Molecules/HomeNameAndDescription";
import HomeNavBar from "../Molecules/HomeNavBar";
import ProfileImage from '../Images/mainprofilephoto.png'

function HomePage() {
    return (
        <Box>
            <HomeNavBar/>
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
