import React, {useEffect, useState} from "react";
import '../css/PlaylistOverview.css'; 
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";
import EditPlaylistButton from "../buttons/EditPlaylistButton";


function PlaylistOverview (props, itemID, href, profileInfo, setDisplay, setPlaylistDescription, setPlaylistTitle, playlistDescription, playlistTitle, thisList, setThisList, thisHREF, setThisHREF, creator, setCreator) {

   
    
    return (
        <div id='PlaylistOverview'>
            <h1>{props.playlistTitle}</h1>
            <p>Created By: {props.creator}</p>
            <EditPlaylistButton profileInfo={props.profileInfo} playlistTitle={props.playlistTitle} setCreator={props.setCreator} creator={props.creator} thisList={props.thisList} setThisList={props.setThisList} setDisplay={props.setDisplay} setPlaylistDescription={props.setPlaylistDescription} setPlaylistTitle={props.setPlaylistTitle}/>
            <div className="list">
                {props.thisList.map((item, index) => (
                    <div key={index}>
                        <p>{index+1} {item.track.name}</p>
                        <p>{item.track.artists[0].name}</p>
                        <AddToPlaylistButton 
                            song={item.track.name}
                            artist={item.track.artists[0].name}
                            creatingPlaylist={props.creatingPlaylist}
                            setCreatingPlaylist={props.setCreatingPlaylist}/>
                     </div>
                  
                ))}
                   
            </div> 
            
        </div>
    ); 
}; 

export default PlaylistOverview; 