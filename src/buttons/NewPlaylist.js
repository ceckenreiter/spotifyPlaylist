import React from "react";
import CreatePlaylist from "../Components/CreatePlaylist";

function CreatePlaylistButton (props, setPlaylistDescription, setPlaylistTitle, playlistDescription, playlistTitle, setDisplay, username, profileInfo) {

    const handleClick = (e) => {
        e.preventDefault()
        
       props.setDisplay(
            <CreatePlaylist 
                setDisplay={props.setDisplay} 
                username={props.username} 
                profileInfo={props.profileInfo}
                playlistDescription={props.playlistDescription}
                playlistTitle={props.playlistTitle}
                setPlaylistDescription={props.setPlaylistDescription}
                setPlaylistTitle={props.setPlaylistTitle}
                
            />)
    }

    return (
       <button onClick={handleClick}>New Playlist</button>
    )

}

export default CreatePlaylistButton