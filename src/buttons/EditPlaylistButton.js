import React from "react";
import EditPlaylistView from "../Components/EditPlaylistView";

function EditPlaylistButton (props, itemID, creator, setCreator, setPlaylistDescription, setPlaylistTitle, playlistTitle, playlistDescription,  setDisplay, profileInfo, createNewPlaylist, updatePlaylist, deletePlaylist, setPlaylistID, playlistID, removeFromPlaylist) {



    const checkAuth = (e) => {
        e.preventDefault()        
        if (props.creator===props.profileInfo.display_name) {
            props.setDisplay(
                <EditPlaylistView 
                    setDisplay={props.setDisplay}
                    itemID={props.itemID} 
                    playlistTitle={props.playlistTitle} 
                    setPlaylistDescription={props.setPlaylistDescription} 
                    setPlaylistTitle={props.setPlaylistTitle} 
                    setCreator={props.setCreator} 
                    playlistDescription={props.playlistDescription}  
                    creator={props.creator} 
                    thisList={props.thisList} 
                    createNewPlaylist={props.createNewPlaylist} 
                    deletePlaylist={props.deletePlaylist} 
                    setPlaylistID={props.setPlaylistID} 
                    playlistID={props.playlistID} 
                    updatePlaylist={props.updatePlaylist}
                    removeFromPlaylist={props.removeFromPlaylist}/>)
        }   else {
            window.alert(`Please contact ${props.creator} to made edits to this Playlist`)
        }     
       
    }

    return (
       <button onClick={checkAuth}>Edit</button>
    )

}

export default EditPlaylistButton