import React, {useEffect, useState} from "react";
import '../css/Browse.css'
import ViewButton from '../buttons/ViewButton' 

function Browse (props, thisHREF, thisList, setThisList, setThisHREF, state, setState, display, setDisplay, creatingPlaylist, setCreatingPlaylist, profileInfo, playlistDescription, playlistTitle, setPlaylistDescription, setPlaylistTitle, choosePlaylist) {

    
    return (
        <div>
            <div id='browse'>
                <h1>Browse</h1>
                <div className="options">
                    {props.state.map((item, index) => (
                            <div key={index}>
                               <p>{item.name}</p>
                               <ViewButton 
                                    id={item.id} 
                                    thisHREF={props.thisHREF}
                                    setThisHREF={props.setThisHREF}
                                    href={item.href}
                                    name={item.name}
                                    number={2}
                                    display={props.display}
                                    setDisplay={props.setDisplay}
                                    thisList={props.thisList}
                                    setThisList={props.setThisList}
                                    profileInfo={props.profileInfo}
                                    playlistDescription={props.playlistDescription}
                                    playlistTitle={props.playlistTitle}
                                    setPlaylistDescription={props.setPlaylistDescription}
                                    setPlaylistTitle={props.setPlaylistTitle}
                                    choosePlaylist={props.choosePlaylist}
                                    />
                            </div>
                        ))}  
                </div>
            </div>
        </div>
    ); 
}; 

export default Browse; 


