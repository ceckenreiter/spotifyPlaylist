import React from "react";
import '../css/ArtistOverview.css'

function ArtistOverview (props) {


    


    return (
        <div>
            <div>Image of Artist</div>
            <h1>{props.value}</h1>
            <div id='SongResults'>
                <div className='List'> 
                <p>Songs</p>
                    
                </div>
            </div>
            <div id='AlbumResults'>
                <div className='List'> 
                <p>Albums</p>
                    
                </div>
            </div>
        </div>
    ); 
}; 

export default ArtistOverview; 