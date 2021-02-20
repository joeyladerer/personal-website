import React from "react"
import '../CSS Files/SocialsBar.css'
import { FaInstagram, FaGithub, FaSpotify, FaItunes, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Button } from '@chakra-ui/react'
import SocialButton from "../Atoms/SocialButton";

function SocialsBar() {
    return(
        <div className={"Layout"}>
            <SocialButton
                image={<FaGithub size={50} color={"black"}/>}
                name={"github"}
            />
            <SocialButton
                image={<FaItunes size={50} color={"black"}/>}
                name={"itunes"}
            />
            <SocialButton
                image={<FaInstagram size={50} color={"black"}/>}
                name={"insta"}
            />
            <SocialButton
                image={<FaYoutube size={50} color={"black"}/>}
                name={"yt"}
            />
            <SocialButton
                image={<FaSpotify size={50} color={"black"}/>}
                name={"spotify"}
            />
            <SocialButton
                image={<FaLinkedin size={50} color={"black"}/>}
                name={"linkedin"}
            />
        </div>
    )
}

export default SocialsBar