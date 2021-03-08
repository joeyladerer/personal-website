import React from "react"
import {Box, Button, Center} from "@chakra-ui/react"
import MusicNavBar from "../Molecules/NavBars/MusicNavBar";
import PageInfo from "../Molecules/PageInfo";

function Music() {
    return (
        <Box>
            <Center>
                <MusicNavBar/>
            </Center>
            <Center>
                <PageInfo text={
                    "Music has always been a part of my life; from the moment i picked up the ukulele with my grandpa, " +
                    "I knew music was something I loved. To this day, music stays part of my life. I produce using " +
                    "Logic Pro X, and work on two separate musical endeavors: Joey Laderer (my solo project) and Sugar Drive."
                }/>
            </Center>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
            <Button
                color={"#FFF38A"}
                _hover={{backgroundColor: "#373737", color: "#FD9BFF", borderColor: "#FD9BFF"}}
                outline={"black"}
                variant={"outline"}
                borderColor={"#FFF38A"}
                marginTop={10}
                marginLeft={5}
                marginRight={5}
                onClick={() => window.open("https://open.spotify.com/artist/5VfZ4trT5WsG9IkEGnWOMy?si=UvARutaTRJuvf0N27HktuA", "_blank")}
            >spotify
            </Button>
            <Button
                color={"#FFF38A"}
                _hover={{backgroundColor: "#373737", color: "#FD9BFF", borderColor: "#FD9BFF"}}
                outline={"black"}
                variant={"outline"}
                borderColor={"#FFF38A"}
                marginTop={10}
                marginLeft={5}
                marginRight={5}
                onClick={() => window.open("https://music.apple.com/us/artist/joey-laderer/1512388519", "_blank")}
            >apple music
            </Button>
            </div>
        </Box>
    )
}

export default Music
