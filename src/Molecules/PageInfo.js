import React from "react"
import '../CSS Files/GenericPageInfo.css'
import {Center} from "@chakra-ui/react";

const ColoredLine = ({color}) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginBottom: 10
        }}
    />
);

function PageInfo(props) {
    return (
        <Center>
            <div className={"Name-Description-Cont"}>
                <h1 className={"Name"}>JOEY LADERER</h1>
                <ColoredLine color={"#DAD398"}/>
                <p className={"Description"}>{props.text}</p>
            </div>
        </Center>
    )
}

export default PageInfo