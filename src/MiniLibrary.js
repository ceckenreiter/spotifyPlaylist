import React from "react";
import './MiniLibrary.css';

function MiniLibrary() {
    const playlists = [
        {title:'hello', length: '20:15'},
        {title:'look what you made me do', length:'20:16'}, 
        {title: 'Mama Mia', length:'20:02'}, 
        
    ]; 

    return (
        <div>
            <div className='MiniLibrary' >
                <h1>Your Library</h1>
                {playlists.map((playlist, index) => (
                    <a>
                        <div key={index}>
                            <span>{playlist.title}</span>
                            <span>{playlist.length}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MiniLibrary; 