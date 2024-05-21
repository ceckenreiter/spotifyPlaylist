import React, { useState } from "react";
import '../css/EditPlaylist.css'
import ViewButton from "../buttons/ViewButton";
import DeletePlaylist from "../buttons/DeletePlaylistButton";


function EditPlaylistView (props, itemID, profileInfo, setCreator, creator, thisList, setThisList, playlistTitle, playlistDescription, setPlaylistTitle, setPlaylistDescription, deletePlaylist, createNewPlaylist, setPlaylistID, playlistID, updatePlaylist) {

    const [view, setView] = useState(<div>No Songs Yet Add Some Songs</div>)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    
    if (props.thisList.length>0) {
        setView(
            <div>
                {props.thisList.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <ViewButton 
                            thisList={props.thisList}
                            setThisList={props.setThisList}
                            setDisplay={props.setDisplay} 
                            display={props.display} 
                            href={item.href} 
                            number={3} 
                            setClickedSong={props.setClickedSong}/>
                    </div>
                ))}
            </div>
        )
    }


    const handleTitleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
    
   }


   const handleDescriptionChange = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
}

    const changePage = (e) => {
        props.updatePlaylist(title, description, props.playlistID)
    }

    return (
        <div>
            <form id='editPlaylist'>
                <input 
                    defaultValue={props.playlistTitle} 
                    onChange={handleTitleChange}
                    />
                 <input 
                    defaultValue={props.playlistDescription} 
                    onChange={handleDescriptionChange}
                />
                <div className="options">
                    
                </div>
                <p>Created By: {props.creator}</p>
            </form>
            <div>{view}</div>
            <button onClick={changePage}>Save</button>
            <DeletePlaylist playlistID={props.playlistID} deletePlaylist={props.deletePlaylist}/>

            
        </div>
       

    )
}

export default EditPlaylistView