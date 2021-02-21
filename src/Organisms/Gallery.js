import React from "react"
import {Box, Center} from "@chakra-ui/react"
import '../CSS Files/HomePage.css'
import GalleryNavBar from "../Molecules/NavBars/GalleryNavBar";

function Gallery() {
    return (
        <Box>
            <Center>
                <GalleryNavBar/>
            </Center>
            <Center>
                <h1 style={{color: "white"}}>a page with photos!</h1>
            </Center>
        </Box>
    )
}

export default Gallery
