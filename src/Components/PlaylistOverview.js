import React, {useEffect, useState} from "react";
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";

function PlaylistOverview (props, href) {

    const [thisList, setThisList] = useState([])

    useEffect(() => {
        let token = window.localStorage.getItem('token')

        const url = props.href

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }
        fetch(`${url}`, authParam)
        .then(response => response.json())
        .then(result => { 
            console.log(result.name)
            console.log(result.tracks)
            console.log(result.tracks.items)
            setThisList(result.tracks.items)
        })
        .catch(error => console.log(error))
    }, [])





    return (
        <div>
            <h1>hello</h1>
            <div className="options">
            
            </div>
        </div>
    ); 
}; 

export default PlaylistOverview; 