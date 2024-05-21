import React, {useState, useEffect} from "react";
import AddToPlayListView from "./AddToPlaylist";
import Playlists from "./Playlists";

function CreatePlaylist (props, profileInfo, setDisplay, playlistTitle, playlistDescription, setPlaylistTitle, setPlaylistDescription, updatePlaylist) {

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

    const changePage = (e) => {
        e.preventDefault()
        props.updatePlaylist(title, description)
        props.setDisplay(
        <AddToPlayListView 
            profileInfo={props.profileInfo}
            playlistTitle={props.playlistTitle}
            playlistDescription={props.playlistDescription}
        
        />)
    }


   


    return (
        <form>
            <h1>Step 1: Let's Add Some Information to Our Playlist</h1>
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
            <button onClick={changePage}>Next</button>
        </form>
        
        
    )
}

export default CreatePlaylist