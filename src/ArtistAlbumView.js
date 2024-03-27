import React from "react";
import PlayButton from "./PlayButton";

function ArtistAlbumView (props, value) {

    return (
        <div>
            <h1>Artist Album Overview</h1>
            <h2>{props.value}</h2>
        </div>
    ); 
}; 

export default ArtistAlbumView; 