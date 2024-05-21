import React, { useState } from "react";
import '../css/EditPlaylist.css'
import ViewButton from "../buttons/ViewButton";
import DeletePlaylist from "../buttons/DeletePlaylistButton";


function EditPlaylistView (props, itemID, profileInfo, setCreator, creator, thisList, setThisList, playlistTitle, playlistDescription, setPlaylistTitle, setPlaylistDescription) {

    const [view, setView] = useState(<div>No Songs Yet Add Some Songs</div>)
    console.log(props.playlistTitle)
    
    if (props.thisList==='') {
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
                            creatingPlaylist={props.creatingPlaylist} 
                            setCreatingPlaylist={props.setCreatingPlaylist} 
                            clickedSong={props.clickedSong}
                            setClickedSong={props.setClickedSong}/>
                    </div>
                ))}
            </div>
        )
    }

    const handleTitleChange = (e) => {
        e.preventDefault()
       
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault()
       
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
                <p>Created By: {props.creator}</p>
            </form>
            <div>{view}</div>
            <DeletePlaylist />

            
        </div>
       

    )
}

export default EditPlaylistView