import React, {useEffect} from "react";

function ProfileInformation (props, setProfileInfo) {
    
    useEffect(() => {
        const token = window.localStorage.getItem('token')

        var authParams = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
            scopes: 'user-read-private user-read-email'
        }

        fetch('https://api.spotify.com/v1/me', authParams)
        .then(response => response.json())
        .then(json => {
            props.setProfileInfo(json)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
               
        </div>
    )
} 


export default ProfileInformation