import React from "react";

function RemoveFromPlaylistButton (props, songURI, playlistID, removeFromPlaylist) {
    const handleClick = () => {
        props.removeFromPlaylist(props.playlistID, props.songURI)
    }
    return (
        <button onClick = {handleClick}>-</button>
    )
} 

export default RemoveFromPlaylistButton