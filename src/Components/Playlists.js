import React, {useState, useEffect} from "react";

import '../css/Tracklist.css';
import CreatePlaylistButton from "../buttons/CreatePlaylistButton";


function Playlists(props, username, setUsername ) {

    useEffect(() => {
        let token = window.localStorage.getItem('token')

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
            
        }

    
        
    }, [])

    

    return (
        <div>
            <div className='Tracklist' >
                <h1>Playlists</h1>
                
                </div>
                <CreatePlaylistButton />
            </div>
        
    );
};

export default Playlists; 