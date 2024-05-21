import React from "react";

function DeletePlaylist (props, playlistID, deletePlaylist ) {
    

    const handleClick = (e) => {
        props.deletePlaylist(props.playlistID)
       
        
      };
    return (
        <div>
            <button onClick={handleClick} >Delete</button>
        </div>
    )

} 

export default DeletePlaylist