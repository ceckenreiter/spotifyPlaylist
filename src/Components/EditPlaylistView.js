import React, { useState } from "react";
import '../css/EditPlaylist.css'
import SaveToSpotifyButton from "../buttons/SaveToSpotifyButton";
import ViewButton from "../buttons/ViewButton";


function EditPlaylistView (props, profileInfo, name, setName, setCreator, creator, thisList, setThisList, playlistTitle, playlistDescription, setPlaylistTitle, setPlaylistDescription) {

    const [view, setView] = useState(<div>Add Songs</div>)

   


    async function postData(url = '', data = {}) {
        let token = window.localStorage.getItem('token')
        
        const response = await fetch(url, 
            {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                },
            body: JSON.stringify(data),
            });
        
        return response.json(); 
      }

      
      postData(`https://api.spotify.com/v1/users/foodredflower/playlists`, {name: 'hello',  description: 'testscheme'})
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });


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
        props.setPlaylistTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault()
        props.setPlaylistDescription(e.target.value)

    }

    return (
        <div>
            <div id='editPlaylist'>
                
                <input 
                    defaultValue={props.playlistTitle} 
                    onChange={handleTitleChange}
                    />
                 <input 
                    defaultValue={props.playlistDescription} 
                    onChange={handleDescriptionChange}
                />
                <p>Created By: {props.creator}</p>
            </div>
            <div>{view}</div>

            <SaveToSpotifyButton />
            
        </div>
       

    )
}

export default EditPlaylistView