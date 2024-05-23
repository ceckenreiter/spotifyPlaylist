import React from "react";

function RemoveFromPlaylistButton (props, songURI, playlistID, removeFromPlaylist, setDisplay) {
    const handleClick = () => {
        console.log(props.songURI)
        console.log(props.playlistID)
        props.removeFromPlaylist(props.playlistID, props.songURI)

    }
   
   
    return (
        <button onClick = {handleClick}>-</button>
    )

} 

export default RemoveFromPlaylistButton