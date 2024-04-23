import React from "react";
import SavePlaylistButton from "../buttons/CreateToSpotify";
import CreateToSpotify from "../buttons/CreateToSpotify";

function CreatePlaylist (props, display, setDisplay, setProfileInfo, profileInfo, username, playlistTitle, playlistDescription, setPlaylistDescription, setPlaylistTitle) {


    const handleTitleChange = (e) => {
        e.preventDefault()
        props.setPlaylistTitle(e.target.value)
      
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault()
        props.setPlaylistDescription(e.target.value)
     

    }

    return (
        <form>
            <h1>Step 1: Let's Add Some Information to Our Playlist</h1>
            <h1>Title</h1>
            <input 
                type='text'
                onChange={handleTitleChange}
                defaultValue={props.playlistTitle}

            />
            <h1>Description</h1>
            <input 
                type='texttarea'
                defaultValue={props.playlistDescription}
                onChange={handleDescriptionChange}
            />
            <h1>Do you want this to be a public playlist?</h1>
            <label class="switch">
                <input id='?public' type="checkbox" />
                <span class="slider round"></span>
            </label>
            <h1>Would you like to make this a collaborative playlist?</h1>
            <label class="switch">
                <input id='?collaborative' type="checkbox" />
                <span class="slider round"></span>
            </label>
            <h1>Step 2: Save and Add Tracks </h1>
            <CreateToSpotify 
                setDisplay={props.setDisplay} 
                playlistDescription={props.playlistDescription}
                playlistTitle={props.playlistTitle}
                setPlaylistDescription={props.setPlaylistDescription}
                setPlaylistTitle={props.setPlaylistTitle}
                username={props.username} 
                profileInfo={props.profileInfo}/>
        </form>
        
        
    )
}

export default CreatePlaylist