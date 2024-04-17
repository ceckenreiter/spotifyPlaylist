import React, {useEffect, useState} from "react";
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";

function PlaylistOverview (props, href) {
 
const [thisList, setThisList] = useState([])
const [name, setName] = useState('')

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
            setName(result.name)
            console.log(result.tracks.items[0].name)
            setThisList(result.tracks.items)
        })
        .catch(error => console.log(error))
    }, [props.href])

    return (
        <div>
            <h1>{name}</h1>
            <div className="options">
                {thisList.map((item, index) => (
                    <div key={index}>
                        <p>{item.track.name}</p>
                        <p>{item.track.artists[0].name}</p>
                        <AddToPlaylistButton 
                            song={item.track.name}
                            artist={item.track.artists[0].name}
                            creatingPlaylist={props.creatingPlaylist}
                            setCreatingPlaylist={props.setCreatingPlaylist}/>
                     </div>
                  
                ))}
                   
            </div> 
            
        </div>
    ); 
}; 

export default PlaylistOverview; 