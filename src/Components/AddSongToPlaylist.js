import React from "react";

function AddSongToPlaylist (props, songURI, playlistID, choosePlaylist ) {
    const handleClick = (e) => {
        console.log(props.songURI, props.playlistID)
        props.choosePlaylist(props.playlistID, props.songURI)
        
      };
    return (
        <div>
            <button onClick={handleClick}>+</button>
        </div>
    )

} 

export default AddSongToPlaylist