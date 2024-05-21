import React from "react";
import EditPlaylistView from "../Components/EditPlaylistView";

function EditPlaylistButton (props, itemID, creator, setCreator, setPlaylistDescription, setPlaylistTitle, playlistTitle, playlistDescription,  setDisplay, profileInfo, updatePlaylist, deletePlaylist, setPlaylistID, playlistID) {

    const checkAuth = (e) => {
        e.preventDefault()        
        if (props.creator===props.profileInfo.display_name) {
            props.setDisplay(<EditPlaylistView itemID={props.itemID} playlistTitle={props.playlistTitle} setPlaylistDescription={props.setPlaylistDescription} setPlaylistTitle={props.setPlaylistTitle} setCreator={props.setCreator} playlistDescription={props.playlistDescription}  creator={props.creator} thisList={props.thisList} updatePlaylist={props.updatePlaylist} deletePlaylist={props.deletePlaylist} setPlaylistID={props.setPlaylistID} playlistID={props.playlistID}/>)
        }   else {
            window.alert(`Please contact ${props.creator} to made edits to this Playlist`)
        }     
       
    }

    return (
       <button onClick={checkAuth}>Edit</button>
    )

}

export default EditPlaylistButton