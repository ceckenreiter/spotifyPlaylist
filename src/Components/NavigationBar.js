import React from "react";
import '../css/NavigationBar.css'


function NavigationBar (props, isLogged, setIsLogged, profileInfo, setProfileInfo) {
    
        return(
            <nav>
                <p>Powered By <a target="_blank" href="https://ceckenreiter.github.io">GoodBoi Inc.</a></p>
               {props.isLogged ? 
                    <div>
                        <p><a target='_blank' href="https://spotify.com">{props.profileInfo.id}</a></p> 
                    </div>
                :
                <a target="#LoginPage" >Login</a>
               }
            </nav>
        )
   

}
export default NavigationBar