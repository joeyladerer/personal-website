import React from "react"
import {Box, Button, ButtonGroup} from "@chakra-ui/react"
import "../CSS Files/Nav.css"

function NavButton(props) {
    return (
        <Button
            className={"Nav-Button"}
            color={props.color}
            _hover={{backgroundColor: "black", color: "#FD9BFF"}}
            outline={"black"}
            _focus={{color: "#FFF38A", fontSize: "large"}}
            variant={"unstyled"}
        >
            {props.text}
        </Button>
    )
}

export default NavButton
