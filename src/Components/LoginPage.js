import React from "react"
import LinkToSpotifyButton from "../buttons/LinkToSpotifyButton"
import "../css/AddToPlayListButton.css"

function LoginPage (props, ID, setProfileInfo, setIsLogged) {


    return (

    <section id="startPage">
            <div className="button">
                <LinkToSpotifyButton 
                    ID={props.ID}
                    setProfileInfo={props.setProfileInfo}
                    setIsLogged={props.setIsLogged}

                 />
            </div>
            <h1>Here is the text describing why we have to link to our spotify</h1>
    </section>

    )
} export default LoginPage


