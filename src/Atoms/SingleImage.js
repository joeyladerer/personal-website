import React from "react"
import { Box, Image } from "@chakra-ui/react"

function SingleImage(props) {
    if (props.click) {
        return (
            <Box as={"Button"}
                 onClick={() => window.open(props.url, "_blank")}
                 width={props.width}
                 margin={4}
            >
                <Image
                    src={props.image}
                    borderRadius={10}
                />
            </Box>
        )
    } else {
        return (
            <Box
                margin={4}
            >
            <Image
                src={props.image}
                width={props.width}
                borderRadius={10}
            />
            </Box>
        )
    }
}

export default SingleImage