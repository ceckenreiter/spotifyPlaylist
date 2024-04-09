import React from "react"
import LinkToSpotifyButton from "./LinkToSpotifyButton"
import "./css/AddToPlayListButton.css"

function LoginPage (props, ID) {


    return (
    <section id="startPage">
            <div className="button">
                <LinkToSpotifyButton 
                    ID={props.ID}

                 />
            </div>
            <h1>Here is the text describing why we have to link to our spotify</h1>
    </section>

    )
} export default LoginPage


