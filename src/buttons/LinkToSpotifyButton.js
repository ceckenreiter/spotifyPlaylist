import React, {useState, useEffect} from "react";

function LinkToSpotifyButton (props, profileInfo, setProfileInfo, ID, isLogged, setIsLogged) {

const CLIENT_ID = props.ID

const REDIRECT_URI = 'http://localhost:3000';
const AUTHOR_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE ='token'

const scope = 'playlist-modify-public playlist-modify-private'

const [token, setToken] = useState('')


    useEffect(() => {
        const hash = window.location.hash
        let token = (window.localStorage.getItem("token"))

        if (!token && hash) { //checks if we get a access token//
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash=""
            window.localStorage.setItem('token', token) 
            props.setIsLogged(true) 
        }
        setToken(token) //if so we extract the token part and set our token -- must be after if statement otherwise token is never set
    }, [])

    const logout = () => {
        setToken("")
        props.setProfileInfo("")
        window.localStorage.removeItem("token")
        props.setIsLogged(false)
    }


    return (
        <div>
            {!token ?
            <a href={`${AUTHOR_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`}>
            <button>Link To Spotify</button>
            </a>
            :<button onClick={logout}>Log Out of Spotify</button>
            }
        </div>
    )

} 

export default LinkToSpotifyButton

