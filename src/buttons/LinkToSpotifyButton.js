import React from "react";

function LinkToSpotifyButton (props, token, setToken, setProfileInfo, ID, setIsLogged) {

const CLIENT_ID = props.ID

const REDIRECT_URI = 'http://localhost:3000';
const AUTHOR_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE ='token'

const scope = 'playlist-modify-public playlist-modify-private'

    const logout = () => {
        props.setToken("")
        props.setProfileInfo("")
        window.localStorage.removeItem("token")
        props.setIsLogged(false)
    }


    return (
        <div>
            {!props.token ?
            <a href={`${AUTHOR_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`}>
            <button>Link To Spotify</button>
            </a>
            :<button onClick={logout}>Log Out of Spotify</button>
            }
        </div>
    )

} 

export default LinkToSpotifyButton

