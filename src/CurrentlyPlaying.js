import React from "react";
import './CurrentlyPlaying.css'; 

function CurrentlyPlaying() {
    return (
    <div className='CurrentlyPlaying'>
        <h1>Currently Playing</h1>
        <div className="content">
            <div className='img'>Image of Cover</div>
            <div className='info'>
                <h2>Song Title</h2>
                <h3>Artist</h3>
                <button>Play Button</button>
            </div>
        </div>
    </div>
    ); 
}; 

export default CurrentlyPlaying; 