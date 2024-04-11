import React from "react";

function RemoveFromPlaylistButton (props, thisSong,  thisPlaylist, setThisPlaylist) {
   
    const handleClick = (e) => {
        e.preventDefault();
        
        props.setThisPlaylist(
            props.thisPlaylist.filter(songs =>
              songs.song !== props.thisSong
            ))
    }
    return (
        <button onClick={handleClick}>-</button>
    )

} 

export default RemoveFromPlaylistButton