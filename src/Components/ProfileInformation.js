import React, {useState, useEffect} from "react";

function ProfileInformation (props, ID, SECRET, profileInfo, setProfileInfo) {
    
    let token = window.localStorage.getItem('token')
    const [username, setUsername] = useState('')

    useEffect(() => {
        var authParams = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }
        fetch(`https://api.spotify.com/v1/users/foodredflower`, authParams)
        .then(response => response.json())
        .then(json => props.setProfileInfo(json))
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
               
        </div>
    )
} 


export default ProfileInformation