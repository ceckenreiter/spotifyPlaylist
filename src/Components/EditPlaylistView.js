import React, { useState, useEffect } from "react";
import '../css/EditPlaylist.css'
import DeletePlaylist from "../buttons/DeletePlaylistButton";
import RemoveFromPlaylistButton from "../buttons/RemoveFromPlaylistButton";


function EditPlaylistView (props, setDisplay, itemID, profileInfo, setCreator, creator, thisList, setThisList, playlistTitle, playlistDescription, setPlaylistTitle, setPlaylistDescription, deletePlaylist, createNewPlaylist, setPlaylistID, playlistID, updatePlaylist, removeFromPlaylist) {

    const [view, setView] = useState(<div>No Songs Yet Add Some Songs</div>)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    useEffect(() => {
        setView(
            <div>
                {props.thisList.map((item, index) => (
                    <div key={index}>
                        <p>{item.track.name}</p>
                        <p>{item.track.artists[0].name}</p>
                        <RemoveFromPlaylistButton 
                            removeFromPlaylist={props.removeFromPlaylist}
                            playlistID={props.playlistID}
                            songURI={item.track.uri}
                            setDisplay={props.setDisplay}
                        />
                    </div>
                ))}
            </div>
        )
  }, [props.thisList])




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