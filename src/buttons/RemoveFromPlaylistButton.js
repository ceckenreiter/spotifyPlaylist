import React from "react";

function RemoveFromPlaylistButton (props, creatingPlaylist, setCreatingPlaylist) {
   
    const handleClick = (e) => {
        e.preventDefault();
        
        props.setCreatingPlaylist(
            props.creatingPlaylist.filter(songs =>
              songs.song !== props.song
            ))
        console.log(props.creatingPlaylist)

    }
    return (
        <button onClick={handleClick} >-</button>
    )

} 

export default RemoveFromPlaylistButton