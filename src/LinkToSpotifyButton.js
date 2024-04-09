import React, {useState, useEffect} from "react";
import SearchButton from "./SearchButton";

function LinkToSpotifyButton (props, token, setToken) {

const CLIENT_ID = '740dffe0e2cd4743995272820b7f8ec8';
const REDIRECT_URI = 'http://localhost:3000';
const AUTHOR_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE ='token'
const client_secret = '16d3b53ef9804a7387b3fdbe6e11293f'




    return (
        <div>
            {!props.token ?
            <a href={`${AUTHOR_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            <button>Link To Spotify</button>
            </a>
            : <button>Already Logged In</button>
            }
        </div>
    )

} 

export default LinkToSpotifyButton

