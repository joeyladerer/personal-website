import React from "react"
import SingleImage from "../Atoms/SingleImage";
import AmericanDreams from "../Images/Music/AmericanDreams.jpg"
import Chained from "../Images/Music/ChainedInLove.jpeg"
import AnticsAndOptics from "../Images/Music/cover-reducedsize.png"
import Home from "../Images/Music/Home.jpg"
import Paranoia from "../Images/Music/ParanoiaCover.jpg"
import Purgatory from "../Images/Music/PurgatoryCover.png"
import RadioSilence from "../Images/Music/RadioSilenceCover.png"
import SB4TC from "../Images/Music/SB4TC.jpg"
import Soul from "../Images/Music/Soul.jpg"
import Starstruck from "../Images/Music/Starstruck.jpeg"
import Traffic from "../Images/Music/Traffic.jpg"

function AlbumCoverGallery() {
    return (
        <div style={{margin: 20}}>
            <SingleImage
                image={RadioSilence}
                click={true}
                url={"https://open.spotify.com/artist/5VfZ4trT5WsG9IkEGnWOMy?si=t95bysoLQcaTHa5EDrL6Kw"}
                width={300}
            />
            <SingleImage
                image={AnticsAndOptics}
                click={true}
                url={"https://open.spotify.com/album/7mUbcJ5CTKpojYDv3Ac3E2?si=KR24rFU0RhOjeoX4210iTA"}
                width={300}
            />
            <SingleImage
                image={SB4TC}
                click={true}
                url={"https://open.spotify.com/album/5J3ox3HXaQyNMOrwXUxAkF?si=1lEmgKM_Sw2_FRfelKsw3Q"}
                width={300}
            />
            <SingleImage
                image={AmericanDreams}
                click={true}
                url={"https://open.spotify.com/album/1VpdSNRL2cPKXCvGUGXLTR?si=zjhqQZK3SrKd6EW7-thnug"}
                width={300}
            />
            <SingleImage
                image={Purgatory}
                click={true}
                url={"https://open.spotify.com/track/7gZBIdkkvKZvjOML0FunFs?si=o-foSuYrSh2WfbgUPmn37g"}
                width={300}
            />
            <SingleImage
                image={Paranoia}
                click={true}
                url={"https://open.spotify.com/track/5qjuKGaSKeoZuBLYuODVb1?si=ts4lK1ErR_atIrMohG92Qw"}
                width={300}
            />
            <SingleImage
                image={Soul}
                click={true}
                url={"https://open.spotify.com/track/0a0cA2Wm2O0nEheAjBev8u?si=oDv8ZL65RC-Zb2tzi67Jkg"}
                width={300}
            />
            <SingleImage
                image={Home}
                click={true}
                url={"https://open.spotify.com/track/7Bpkw9pFV2RonRZXmrikjG?si=fBUDmHihS1amrVHT1vpStg"}
                width={300}
            />
            <SingleImage
                image={Starstruck}
                click={true}
                url={"https://open.spotify.com/track/0E5Ey6TKzRis3kNc42IZHp?si=9zxAN052SwCXRDqqkrOLqQ"}
                width={300}
            />
            <SingleImage
                image={Chained}
                click={true}
                url={"https://open.spotify.com/track/0MZgbTVwLMDbPVBq8tVSBO?si=ug5HWBk8S1ug9LTgx_letQ"}
                width={300}
            />
            <SingleImage
                image={Traffic}
                click={true}
                url={"https://open.spotify.com/track/3AyQaTv5BCpu007Sl6jWNL?si=8MePmdSFRvyzFFbuXJYfVQ"}
                width={300}
            />
        </div>
    )
}

export default AlbumCoverGallery