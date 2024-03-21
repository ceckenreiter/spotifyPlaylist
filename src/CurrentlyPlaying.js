import React, {useState} from "react";
import './css/CurrentlyPlaying.css'; 
import trackList from "./SpotifyAPI";


function CurrentlyPlaying(props, NowPlaying, setNowPlaying, Artist, Album) {

    return (
    <div className='CurrentlyPlaying'>
        <h1>Currently Playing</h1>
        <div className="content">
            <div className='img'>Image of Cover</div>
            <div className='info'>
                <h2>{props.NowPlaying}</h2>
                <h3>{props.Artist}</h3>
                <h3>{props.Album}</h3>
               
            </div>
        </div>
    </div>
    ); 
}; 

export default CurrentlyPlaying; 