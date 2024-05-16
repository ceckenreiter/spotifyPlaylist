import React from "react";

function SaveToSpotifyButton (props, itemID, playlistTitle, playlistDescription) {

    const title = props.playlistTitle
    console.log(title)

    const handleClick = (e) => {

       

    async function sendToSpotify(url = '') {
        let token = window.localStorage.getItem('token')

        const data = 
            {
                "name": 'this title', 
                "description": 'newdescription',
            }

        const response = await fetch(url, 
            {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                },
            body: JSON.stringify(data)
            })
            .then(data => {
                console.log(data)
            })
            .catch(response => console.log(response))
        
      }

      sendToSpotify(`https://api.spotify.com/v1/playlists/${props.itemID}`)
    }


    
    return(
        <button onClick={handleClick}>Save Changes To Spotify</button>
    )
}

export default SaveToSpotifyButton