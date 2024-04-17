import React from "react";
import CreatePlaylist from "../Components/CreatePlaylist";

function CreatePlaylistButton (props, setDisplay) {

    const handleClick = (e) => {
        e.preventDefault()
        
       props.setDisplay(<CreatePlaylist />)
    }

    return (
       <button onClick={handleClick}>New Playlist</button>
    )

}

export default CreatePlaylistButton