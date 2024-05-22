import React from "react";

function AddSongToPlaylist (props, songURI, playlistID, choosePlaylist, name ) {
    const handleClick = (e) => {
        console.log(props.songURI, props.playlistID)
        props.choosePlaylist(props.playlistID, props.songURI)
        
      };
    return (
        <div>
            <button onClick={handleClick}>{props.name}</button>
        </div>
    )

} 

export default AddSongToPlaylist