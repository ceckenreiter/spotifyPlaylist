import React from "react";
import CreatePlaylist from "../Components/CreatePlaylist";

function CreatePlaylistButton (props, setPlaylistDescription, setPlaylistTitle, playlistDescription, playlistTitle, setDisplay, username, profileInfo, updatePlaylist, deletePlaylist, playlistID, setPlaylistID) {

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
                updatePlaylist={props.updatePlaylist}
                deletePlaylist={props.deletePlaylist}
                setPlaylistID={props.setPlaylistID}
                playlistID={props.playlistID}
                
            />)
    }

    return (
       <button onClick={handleClick}>New Playlist</button>
    )

}

export default CreatePlaylistButton