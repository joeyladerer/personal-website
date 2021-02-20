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
                    window.open("https://www.youtube.com/channel/UC5yMP3PAdIRovMl76dABP0w", "_blank")
                } else {
                    window.open("https://sugardrive.net", "_blank")
                }

            }
            }
        >
            {props.image}
        </Button>
    )
}

export default SocialButton
