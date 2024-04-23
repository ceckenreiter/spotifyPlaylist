import React from "react";
import EditPlaylistView from "../Components/EditPlaylistView";

function EditPlaylistButton (props, creator, setName, setCreator, name, description, setDescription,  setDisplay, profileInfo) {

    const checkAuth = (e) => {
        e.preventDefault()        
        if (props.creator===props.profileInfo.display_name) {
            props.setDisplay(<EditPlaylistView setName={props.setName} setCreator={props.setCreator} description={props.description} setDescription={props.setDescription} name={props.name} creator={props.creator} thisList={props.thisList}/>)
        }   else {
            window.alert(`Please contact ${props.creator} to made edits to this Playlist`)
        }     
       
    }

    return (
       <button onClick={checkAuth}>Edit</button>
    )

}

export default EditPlaylistButton