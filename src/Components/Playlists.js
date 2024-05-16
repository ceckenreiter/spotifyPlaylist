import React, {useState, useEffect} from "react";
import '../css/Tracklist.css';
import CreatePlaylistButton from "../buttons/NewPlaylist";
import ViewButton from "../buttons/ViewButton";



function Playlists(props, thisList, setThisList,thisHREF, setThisHREF, display, profileInfo, setProfileInfo, setDisplay, username, setPlaylistDescription, setPlaylistTitle, playlistTitle, playlistDescription) {

    const [myList, setMyList] = useState([])

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
            setMyList(result.items)
        })
        .catch(error => console.log(error))
        
    }, [])

    return (
        <div>
            <h1>Playlists</h1>
            <div className='Tracklist' >
            {myList.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <ViewButton 
                            profileInfo={props.profileInfo}
                            thisList={props.thisList}
                            setThisHREF={props.setThisHREF}
                            thisHREF={props.thisHREF}
                            setThisList={props.setThisList}
                            setDisplay={props.setDisplay} 
                            display={props.display} 
                            href={item.href} 
                            number={3} 
                            creatingPlaylist={props.creatingPlaylist} 
                            setCreatingPlaylist={props.setCreatingPlaylist}
                            playlistDescription={props.playlistDescription}
                            playlistTitle={props.playlistTitle}
                            setPlaylistDescription={props.setPlaylistDescription}
                            setPlaylistTitle={props.setPlaylistTitle}
                          
                        />
                    </div>
                ))}
                
                    
            </div> 
            <CreatePlaylistButton  
                display={props.display} 
                setDisplay={props.setDisplay} 
                profileInfo={props.profileInfo} 
                setProfileInfo={props.setProfileInfo} 
                username={props.username} 
                playlistDescription={props.playlistDescription}
                playlistTitle={props.playlistTitle}
                setPlaylistDescription={props.setPlaylistDescription}
                setPlaylistTitle={props.setPlaylistTitle}
              
            />
        </div>    
    );
};

export default Playlists; 