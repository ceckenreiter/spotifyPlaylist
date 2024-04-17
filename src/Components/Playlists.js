import React, {useState, useEffect} from "react";
import '../css/Tracklist.css';
import CreatePlaylistButton from "../buttons/CreatePlaylistButton";
import ViewButton from "../buttons/ViewButton";



function Playlists(props, username, setUsername ) {

    const [thisList, setThisList] = useState([])

    useEffect(() => {
        let token = window.localStorage.getItem('token')

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
       
        }  
        fetch('https://api.spotify.com/v1/me/playlists', authParam)
        .then(response => response.json())
        .then(result => { 
            setThisList(result.items)
        })
        .catch(error => console.log(error))
        
    }, [])

    

    return (
        <div>
            <h1>Playlists</h1>
            <div className='Tracklist' >
                {thisList.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <ViewButton 
                            
                            setDisplay={props.setDisplay} 
                            display={props.display} 
                            href={item.href} 
                            number={3} 
                            creatingPlaylist={props.creatingPlaylist} 
                            setCreatingPlaylist={props.setCreatingPlaylist} 
                            clickedSong={props.clickedSong}
                            setClickedSong={props.setClickedSong}/>
                    </div>
                ))}
                   
            </div> 
        </div>    
    );
};

export default Playlists; 