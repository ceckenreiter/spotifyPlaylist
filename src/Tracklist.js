import React from "react";
import './css/Tracklist.css';
import CreatePlaylistButton from "./CreatePlaylistButton";
import RemoveFromPlaylistButton from "./RemoveFromPlaylistButton";


function Tracklist(props, thisPlaylist, setThisPlaylist) {
    

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
                                <RemoveFromPlaylistButton 
                                thisSong={option.song}
                                thisPlaylist={props.thisPlaylist}
                                setThisPlaylist={props.setThisPlaylist}
                                />
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