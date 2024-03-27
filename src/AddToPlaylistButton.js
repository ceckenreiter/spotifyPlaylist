import { useState } from "react";
import React from "react";

function AddToPlaylistButton (props, thisPlaylist, setThisPlaylist, value1, value2, value3) {
    
    const handleClick = (e) => {
        
        props.setThisPlaylist([...props.thisPlaylist, {song: props.value1, artist: props.value2}])
    }

    return (
        <button onClick={handleClick}>Add</button>
    )
}

export default AddToPlaylistButton