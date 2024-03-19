import React from "react";
import './css/MiniLibrary.css';


function MiniLibrary(props) {
    const playlists = [
        {title:'Playlist 1', length:'20:15'},
        {title:'Playlist 2', length:'20:16'}, 
        {title:'Playlist 3', length:'15:02'}, 
        {title:'Playlist 4', length:'03:02'},
        {title:'Playlist 5', length:'10:12'},
        {title:'Playlist 6', length:'16:01'},
       
    ]; 

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