import React from "react"
import LinkToSpotifyButton from "./LinkToSpotifyButton"
import "./css/AddToPlayListButton.css"

function LoginPage (props, token, setToken) {


    return (
    <section id="startPage">
            <div className="button">
                <LinkToSpotifyButton 
                token={props.token}
                setToken={props.setToken} />
            </div>
            <h1>Here is the text describing why we have to link to our spotify</h1>
    </section>

    )
} export default LoginPage


