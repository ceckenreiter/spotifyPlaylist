import React, {useState} from "react";
import EditPlaylistView from "../Components/EditPlaylistView";

function CreateToSpotify (props, playlistDescription, playlistTitle, setPlaylistDescription, setPlaylistTitle, username, profileInfo, setDisplay) {

    const [thisList, setThisList] = useState([])
   



    const handleSave = (e) => {
        console.log(props.playlistDescription)
        console.log(props.playlistTitle)
        

        props.setDisplay(
            <EditPlaylistView 
                playlistDescription={props.playlistDescription}
                playlistTitle={props.playlistTitle}
                setPlaylistDescription={props.setPlaylistDescription}
                setPlaylistTitle={props.setPlaylistTitle} 
                creator={props.profileInfo.display_name} 
                thisList={thisList} />)

    }

    return (
        <div>
            <button onClick={handleSave}>Create Playlist</button>
        </div>
    )
}

export default CreateToSpotify