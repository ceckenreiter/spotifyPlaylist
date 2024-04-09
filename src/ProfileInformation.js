import React, {useState, useEffect} from "react";

function ProfileInformation (props, token, setToken) {

    const {data, setData} = useState([])
    const {userID, setUserID} = useState('foodredflower')

    useEffect(() => {
        doFetching("https://api.spotify.com/v1/users/foodredflower"); 
    }, []); 

    const doFetching = async(url) => {   
        
        fetch(url, {
            method: 'GET', 
            headers: {
                Authorization: 'Bearer' + props.token
            } 

        })
        .then(response => {
            if (response.ok) {
                return response.json() 
            }
            throw new Error (`error`); 
         })
         .then(response => {
            console.log(response)
            
         })
         .catch(error => console.error(error))
    }

   

    return (
        <div>
            <h2>Here is the info: {props.token}</h2>  
            <h2>Here is the userID:{userID}</h2>  
               
        </div>
    )
} 


export default ProfileInformation