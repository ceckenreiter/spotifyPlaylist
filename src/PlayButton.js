import React, {useState} from "react";


function PlayButton (props, setNowPlaying, setAlbum, setArtist, value1, value2, value3) {

    const handleClick = (e) => {
        e.preventDefault(); 
        props.setNowPlaying(props.value1)
        props.setArtist(props.value2)
        props.setAlbum(props.value3)
    }

    return (<button onClick={handleClick}>Play</button>)
}

export default PlayButton