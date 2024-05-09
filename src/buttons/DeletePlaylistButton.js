import React, {useEffect} from "react";

function DeletePlaylist (props, itemID ) {
    const playlist_ID = props.itemID
    

    const handleClick = (e) => {
        e.preventDefault();
        async function DeleteData(url = '') {
            let token = window.localStorage.getItem('token')
            
            const response = await fetch(url, 
                {
                method: "Delete",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    },
                })

            .then(response => response.json())
            .then(result => { 
                console.log(result)
            })
            .catch(error => console.log(error))
        }
        
        DeleteData(`https://api.spotify.com/v1/playlists/${playlist_ID}/followers`)
        
      };
    return (
        <div>
            <button onClick={handleClick} >Delete</button>
            <p>{props.itemID}</p>
        </div>
    )

} 

export default DeletePlaylist