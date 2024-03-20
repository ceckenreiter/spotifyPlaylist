import React from "react";
import './css/MiniLibrary.css';
import playlists from './PlayList_List'


function MiniLibrary(props, isActive, setIsActive) {
    

    return (
        <div>
            <div className='MiniLibrary' >
                <h1>Your Library</h1>
                <div className='List'>
                    {playlists.map((playlist, index) => (
                        <a>
                            <div key={index}>
                                <span >{playlist.title}</span>
                                <span>{playlist.length}</span>
                            </div>
                        </a>
                    ))}
                </div>
                <p>Add New Playlist</p>
            </div>
        </div>
    );
};

export default MiniLibrary; 