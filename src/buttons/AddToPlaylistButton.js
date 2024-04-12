import React from "react";

function AddToPlaylistButton (props, creatingPlaylist, setCreatingPlaylist, song, artist) {
    
    const handleClick = (e) => {

        props.setCreatingPlaylist([...props.creatingPlaylist, {song: props.song}])
    }

    return (
        <button onClick={handleClick}>+</button>
    )
}

export default AddToPlaylistButton