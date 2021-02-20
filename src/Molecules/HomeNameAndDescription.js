import React from "react"
import '../CSS Files/HomePage.css'
import {Center} from "@chakra-ui/react"

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginBottom: 10
        }}
    />
);

function HomeNameAndDescription() {
    return (
        <Center>
        <div className={"Name-Description-Cont"}>
            <h1 className={"Name"}>JOEY LADERER</h1>
            <ColoredLine color={"#DAD398"} />
            <p className={"Description"}>hi! welcome to my website, the perfect place for fellow computer science nerds, musicians, video editors,
                and food enthusiasts.</p>
        </div>
        </Center>


    )
}

export default HomeNameAndDescription