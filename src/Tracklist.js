import React from "react";
import './css/Tracklist.css';
import CreatePlaylistButton from "./CreatePlaylistButton";


function Tracklist(props, display, setDisplay, title, setTitle, thisPlaylist, setThisPlaylist) {
    

    return (
        <div>
            <div className='Tracklist' >
                <h1>Tracklist</h1>
                <div className='List'>
                    {props.thisPlaylist.map((option, index) => (
                        <a>
                            <div key={index}>
                                <span >{option.song}</span>
                                <span >{option.artist}</span>
                            </div>
                        </a>
                    ))}
                </div>
                <CreatePlaylistButton />
            </div>
        </div>
    );
};

export default Tracklist; 