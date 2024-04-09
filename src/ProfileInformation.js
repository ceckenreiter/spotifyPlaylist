import React, {useState, useEffect} from "react";

function ProfileInformation (props, ID, SECRET) {

    const [user, setUser] = useState('')
    let token = window.localStorage.getItem('token')

    useEffect(() => {

        var authParams = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }
        
        fetch("https://api.spotify.com/v1/users/foodredflower", authParams)
        .then(response => response.json())
        .then(json => 
            setUser(json.id)
        )
        
        .catch(error => console.log(error))
         }, [])


    return (
        <div>
            <h2>Here is the info: </h2>  
            <h2>Here is the userID:{user} </h2>  
               
        </div>
    )
} 


export default ProfileInformation