import React from "react";
import '../css/Tracklist.css';
import CreatePlaylistButton from "../buttons/CreatePlaylistButton";
import ViewButton from "../buttons/ViewButton";



function Playlists(props,thisHREF, setThisHREF, setDisplay, createNewPlaylist, myPlaylists, setPlaylistOverview) {

    return (
        <div>
            <h1>Playlists</h1>
            <div className='Tracklist' >
            {props.myPlaylists.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <ViewButton 
                        setThisHREF={props.setThisHREF}
                        href={item.href} 
                        number={3} 
                        setPlaylistOverview={props.setPlaylistOverview}
                    />
                </div>
            ))}    
            </div> 
            <CreatePlaylistButton  
                createNewPlaylist={props.createNewPlaylist}
                setDisplay={props.setDisplay}
            />
        </div>    
    );
};

export default Playlists; 