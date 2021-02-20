import React from "react"
import {Box, Button, ButtonGroup} from "@chakra-ui/react"
import "../CSS Files/Nav.css"

function NavButton(props) {
    return (
        <Button
            className={"Nav-Button"}
            color={"white"}
            _hover={{backgroundColor: "black", color: "#FFF38A"}}
            outline={"black"}
            _focus={{color: "#FFF38A", fontSize: "large"}}
            variant={"unstyled"}
        >
            {props.text}
        </Button>
    )
}

export default NavButton
