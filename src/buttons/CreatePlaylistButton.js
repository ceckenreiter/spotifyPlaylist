import React from "react";
import CreatePlaylist from "../Components/CreatePlaylist";

function CreatePlaylistButton (props, setDisplay, createNewPlaylist) {

    const handleClick = (e) => {
        e.preventDefault()
        props.setDisplay(
            <CreatePlaylist 
                createNewPlaylist={props.createNewPlaylist}
            />)
    }

    return (
       <button onClick={handleClick}>New Playlist</button>
    )

}

export default CreatePlaylistButton