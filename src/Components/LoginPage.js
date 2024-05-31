import React from "react"
import LinkToSpotifyButton from "../buttons/LinkToSpotifyButton"
import "../css/AddToPlayListButton.css"

function LoginPage (props, ID,token, setToken, setProfileInfo, setIsLogged) {


    return (

    <section id="startPage">
            <div className="button">
                <LinkToSpotifyButton 
                    ID={props.ID}
                    setProfileInfo={props.setProfileInfo}
                    setIsLogged={props.setIsLogged}
                    token={props.token}
                    setToken={props.setToken}

                 />
            </div>
            <h1>Here is the text describing why we have to link to our spotify</h1>
    </section>

    )
} export default LoginPage


