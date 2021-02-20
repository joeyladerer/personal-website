import React from "react"
import {Box, Button, ButtonGroup} from "@chakra-ui/react"
import "../CSS Files/Nav.css"

function handleClick(name) {
    if (name === "github") {
        window.open("https://www.youtube.com/channel/UC5yMP3PAdIRovMl76dABP0w", "_blank")
    }
}


function SocialButton(props) {
    return (
        <Button
            color={"white"}
            _hover={{backgroundColor: "transparent", color: "#FFF38A"}}
            outline={"transparent"}
            _focus={{color: "#FFF38A", fontSize: "large"}}
            variant={"unstyled"}
            height={50}
            onClick={() => {
                if (props.name === "github") {
                    window.open("https://github.com/joeyladerer", "_blank")
                } else if (props.name === "yt") {
                    window.open("https://www.youtube.com/channel/UC2Ht2WNe94w8bSxCGW8AidQ", "_blank")
                } else if (props.name === "insta") {
                    window.open("https://www.instagram.com/joeyladerer/", "_blank")
                } else if (props.name === "itunes") {
                    window.open("https://music.apple.com/us/artist/joey-laderer/1512388519", "_blank")
                } else  if (props.name === "linkedin") {
                    window.open("https://www.linkedin.com/in/joey-laderer/", "_blank")
                } else {
                    window.open("https://open.spotify.com/artist/5VfZ4trT5WsG9IkEGnWOMy?si=UvARutaTRJuvf0N27HktuA", "_blank")
                }
            }
            }
        >
            {props.image}
        </Button>
    )
}

export default SocialButton
