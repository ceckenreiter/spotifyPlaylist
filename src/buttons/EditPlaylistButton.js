import React from "react";
import EditPlaylistView from "../Components/EditPlaylistView";

function EditPlaylistButton (props, creator, setCreator, setPlaylistDescription, setPlaylistTitle, playlistTitle, playlistDescription,  setDisplay, profileInfo) {

    const checkAuth = (e) => {
        e.preventDefault()        
        if (props.creator===props.profileInfo.display_name) {
            props.setDisplay(<EditPlaylistView playlistTitle={props.playlistTitle} setPlaylistDescription={props.setPlaylistDescription} setPlaylistTitle={props.setPlaylistTitle} setCreator={props.setCreator} playlistDescription={props.playlistDescription}  creator={props.creator} thisList={props.thisList}/>)
        }   else {
            window.alert(`Please contact ${props.creator} to made edits to this Playlist`)
        }     
       
    }

    return (
       <button onClick={checkAuth}>Edit</button>
    )

}

export default EditPlaylistButton