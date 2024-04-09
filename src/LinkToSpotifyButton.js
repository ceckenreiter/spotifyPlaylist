import React, {useState, useEffect} from "react";
import SearchButton from "./SearchButton";

function LinkToSpotifyButton (props) {

const CLIENT_ID = '740dffe0e2cd4743995272820b7f8ec8';
const REDIRECT_URI = 'http://localhost:3000';
const AUTHOR_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE ='token'

const [token, setToken] = useState('')


    useEffect(() => {
        const hash = window.location.hash
        let token = (window.localStorage.getItem("token"))

        if (!token && hash) { //checks if we get a access token//
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash=""
            window.localStorage.setItem('token', token)
            setToken(token) //if so we extract the token part and set our tokwn//
        }

    }, [])



    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }


    return (
        <div>
            {!token ?
            <a href={`${AUTHOR_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            <button>Link To Spotify</button>
            </a>
            : <button onClick={logout}>Log Out of Spotify</button>
            }
        </div>
    )

} 

export default LinkToSpotifyButton

