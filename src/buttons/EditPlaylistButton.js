import React from "react";
import EditPlaylistView from "../Components/EditPlaylistView";

function EditPlaylistButton (props, thisList, creator, playlistTitle, playlistDescription,  setDisplay, profileInfo, deletePlaylist, playlistID, removeFromPlaylist) {



    const checkAuth = (e) => {
        e.preventDefault()        
        if (props.creator===props.profileInfo.display_name) {
            props.setDisplay(
                <EditPlaylistView 
                    playlistTitle={props.playlistTitle} 
                    playlistDescription={props.playlistDescription}  
                    thisList={props.thisList} 
                    deletePlaylist={props.deletePlaylist} 
                    playlistID={props.playlistID} 
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