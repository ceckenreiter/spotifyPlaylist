import React, {useState, useEffect} from "react";
import '../css/Tracklist.css';
import CreatePlaylistButton from "../buttons/CreatePlaylistButton";
import ViewButton from "../buttons/ViewButton";



function Playlists(props, thisList, setThisList,thisHREF, setThisHREF, display, profileInfo, setProfileInfo, setDisplay, username, setPlaylistDescription, setPlaylistTitle, playlistTitle, playlistDescription, updatePlaylist, createNewPlaylist, deletePlaylist, setPlaylistID, playlistID, myPlaylists) {


    return (
        <div>
            <h1>Playlists</h1>
            <div className='Tracklist' >
            {props.myPlaylists.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <ViewButton 
                            profileInfo={props.profileInfo}
                            thisList={props.thisList}
                            setThisHREF={props.setThisHREF}
                            thisHREF={props.thisHREF}
                            setThisList={props.setThisList}
                            setDisplay={props.setDisplay} 
                            display={props.display} 
                            href={item.href} 
                            number={3} 
                            playlistDescription={props.playlistDescription}
                            playlistTitle={props.playlistTitle}
                            setPlaylistDescription={props.setPlaylistDescription}
                            setPlaylistTitle={props.setPlaylistTitle}
                            createNewPlaylist={props.createNewPlaylist}
                            updatePlaylist={props.updatePlaylist}
                            deletePlaylist={props.deletePlaylist}
                            setPlaylistID={props.setPlaylistID}
                            playlistID={item.id}
                          
                        />
                    </div>
                ))}
                
                    
            </div> 
            <CreatePlaylistButton  
                display={props.display} 
                setDisplay={props.setDisplay} 
                profileInfo={props.profileInfo} 
                setProfileInfo={props.setProfileInfo} 
                username={props.username} 
                playlistDescription={props.playlistDescription}
                playlistTitle={props.playlistTitle}
                setPlaylistDescription={props.setPlaylistDescription}
                setPlaylistTitle={props.setPlaylistTitle}
                createNewPlaylist={props.createNewPlaylist}
                deletePlaylist={props.deletePlaylist}
                setPlaylistID={props.setPlaylistID}
                playlistID={props.playlistID}
              
            />
        </div>    
    );
};

export default Playlists; 