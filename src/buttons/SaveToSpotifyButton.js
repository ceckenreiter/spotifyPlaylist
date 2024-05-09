import React from "react";

function SaveToSpotifyButton (props, playlistTitle, playlistDescription) {

    const handleClick = (e) => {

    async function postData(url = '', data = {}) {
        let token = window.localStorage.getItem('token')
        
        const response = await fetch(url, 
            {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                },
            body: JSON.stringify(data),
            });
        
        return response.json(); 
      }

      postData(`https://api.spotify.com/v1/playlists/${playlist_id}`, {name: props.playlistTitle,  description: props.playlistDescription})
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
    }


    
    return(
        <button onClick={handleClick}>Save Changes To Spotify</button>
    )
}

export default SaveToSpotifyButton