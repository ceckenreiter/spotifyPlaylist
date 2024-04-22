import React, { useEffect } from "react";
import '../css/EditPlaylist.css'
import RemoveFromPlaylistButton from "../buttons/RemoveFromPlaylistButton";


function EditPlaylistView (props, profileInfo, name, setName, setCreator, creator, thisList, setThisList) {

    console.log('hello:' + props.creator)
    return (
        <div>
            <div id='editPlaylist'>
                <input defaultValue={props.name} ></input>
                <p>Created By: {props.creator}</p>
                   
            </div>
            
        </div>
       

    )
}

export default EditPlaylistView