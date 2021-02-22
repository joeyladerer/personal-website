import React from "react"
import {Box, Center} from "@chakra-ui/react"
import '../CSS Files/HomePage.css'
import GalleryNavBar from "../Molecules/NavBars/GalleryNavBar";
import ImageGroup from "../Molecules/ImageGroup";
import PageInfo from "../Molecules/PageInfo";

function Gallery() {
    return (
        <Box>
            <Center>
                <GalleryNavBar/>
            </Center>
            <PageInfo text={""}/>
            <Center>
                <ImageGroup/>
            </Center>
        </Box>
    )
}

export default Gallery
