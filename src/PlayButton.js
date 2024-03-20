import React, {useState} from "react";
import trackList from "./SpotifyAPI";


function PlayButton (props, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist) {

    const handleClick = (e) => {
        e.preventDefault(); 
        props.setNowPlaying(props.value1)
        props.setArtist(props.value2)
        props.setAlbum(props.value3)
    }

    return (<button onClick={handleClick}>Play</button>)
}

export default PlayButton