import React from "react";
import '../css/NavigationBar.css'


function NavigationBar (props, isLogged, setIsLogged, profileInfo, setProfileInfo) {

    if (props.isLogged) {
        return(
            <nav>
                <p>Powered By <a target="_blank" href="https://ceckenreiter.github.io">GoodBoi Inc.</a></p>
                <div>
                    <p><a target='_blank' href="https://spotify.com">{props.profileInfo.id}</a></p> 
                </div>
            </nav>
        )
    } else {

    return (
        <nav>
        <p>Powered By <a target="_blank" href="https://ceckenreiter.github.io">GoodBoi Inc.</a></p>
        <div>
            <p><a  href="#startPage">Link Spotify</a></p> 
        </div>
    </nav>

    )
}}
export default NavigationBar