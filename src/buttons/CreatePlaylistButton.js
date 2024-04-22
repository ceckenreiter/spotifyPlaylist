import React from "react";
import CreatePlaylist from "../Components/CreatePlaylist";

function CreatePlaylistButton (props, setDisplay, username, profileInfo) {

    const handleClick = (e) => {
        e.preventDefault()
        
       props.setDisplay(<CreatePlaylist setDisplay={props.setDisplay} username={props.username} profileInfo={props.profileInfo}/>)
    }

    return (
       <button onClick={handleClick}>New Playlist</button>
    )

}

export default CreatePlaylistButton