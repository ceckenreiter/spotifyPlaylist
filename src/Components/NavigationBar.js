import React from "react";
import '../css/NavigationBar.css'


function NavigationBar (props, isLogged, setIsLogged, profileInfo, setProfileInfo) {
    
        return(
            <nav>
                <p>Powered By <a target="_blank" rel='noreferrer' href="https://ceckenreiter.github.io">GoodBoi Inc.</a></p>
               {props.isLogged ? 
                    <div>
                        <p><a target='_blank' rel='noreferrer' href="https://spotify.com">{props.profileInfo.id}</a></p> 
                    </div>
                :
                <button target="#LoginPage" >Login</button>
               }
            </nav>
        )
   

}
export default NavigationBar