import React, {useState, useEffect} from "react";

function ProfileInformation (props, ID, SECRET) {

    const {data, setData} = useState([])
    let token = window.localStorage.getItem('token')

    useEffect(() => {

        const authParams = {
            method: 'POST', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
            body: 'grant_type=client_credentials@client_id=' + props.ID + '&client_secret=' + props.SECRET,

        }
        
        fetch("https://api.spotify.com/v1/users/foodredflower", authParams)
        .then(response => console.log(response) )
        .catch(error => console.error(error))
         }, [])


    return (
        <div>
            <h2>Here is the info:</h2>  
            <h2>Here is the userID:</h2>  
               
        </div>
    )
} 


export default ProfileInformation