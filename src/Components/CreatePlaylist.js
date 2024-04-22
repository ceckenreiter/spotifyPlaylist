import React, {useState} from "react";
import SavePlaylistButton from "../buttons/SavePlaylistButton";

function CreatePlaylist (props, display, setDisplay, setProfileInfo, profileInfo, username) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault()
        setDescription(e.target.value)

    }

    return (
        <form>
            <h1>Step 1: Name and Describe Your new Playlist</h1>
            <h1>Title</h1>
            <input 
                type='text'
                onChange={handleTitleChange}

            />
            <h1>Description</h1>
            <input 
                type='texttarea'
                onChange={handleDescriptionChange}
            />
            <h1>Step 2: Save and Add Tracks </h1>
            <SavePlaylistButton setDisplay={props.setDisplay} name={title} description={description} username={props.username} profileInfo={props.profileInfo}/>
        </form>
        
        
    )
}

export default CreatePlaylist