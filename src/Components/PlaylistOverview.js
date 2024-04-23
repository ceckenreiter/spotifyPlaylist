import React, {useEffect, useState} from "react";
import '../css/PlaylistOverview.css'; 
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";
import EditPlaylistButton from "../buttons/EditPlaylistButton";


function PlaylistOverview (props, href, profileInfo, setDisplay, setPlaylistDescription, setPlaylistTitle, playlistDescription, playlistTitle) {

 
const [thisList, setThisList] = useState([])
const [name, setName] = useState('')
const [creator, setCreator] = useState('')



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
            setCreator(result.owner.display_name)
            setThisList(result.tracks.items)
        })
        .catch(error => console.log(error))
    }, [props.href])
    

    return (
        <div id='PlaylistOverview'>
            <h1>{name}</h1>
            <p>Created By: {creator}</p>
            <EditPlaylistButton name={name} profileInfo={props.profileInfo}  setName={setName} setCreator={props.setCreator} creator={creator} thisList={thisList} setThisList={setThisList} setDisplay={props.setDisplay}/>
            <div className="list">
                {thisList.map((item, index) => (
                    <div key={index}>
                        <p>{index+1} {item.track.name}</p>
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