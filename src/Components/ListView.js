import React, {useState, useEffect} from "react"
import ViewButton from "../buttons/ViewButton"

function ListView (props, thisHREF, thisList, setThisList, setThisHREF, id, href, number, setDisplay, display, creatingPlaylist, setCreatingPlaylist, clickedSong, setClickedSong, profileInfo, setPlaylistDescription, setPlaylistTitle, playlistTitle, playlistDescription, choosePlaylist) {
    
    const [thisPlaylist, setThisPlaylist]= useState([])
    const [theme, setTheme] = useState('')

    useEffect(() => {
        let token = window.localStorage.getItem('token')

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }

        fetch(`${props.href}/playlists?limit=5`, authParam)
        .then(response => response.json())
        .then(result => { 
            setTheme(result.message)
            setThisPlaylist(result.playlists.items)
        })
        .catch(error => console.log(error))

    },[props.href])



    return (
        <div>
            <p>Browsing for Playlists that are: {theme} </p>
            <div className="options">
                    {thisPlaylist.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.tracks.total}</p>
                            <p>{item.href}</p>
                            <ViewButton 
                                setDisplay={props.setDisplay} 
                                display={props.display} 
                                href={item.href} 
                                thisList={props.thisList}
                                setThisList={props.setThisList}
                                thisHREF={props.thisHREF}
                                setThisHREF={props.setThisHREF}
                                title={item.name}
                                number={3} 
                                creatingPlaylist={props.creatingPlaylist} 
                                setCreatingPlaylist={props.setCreatingPlaylist} 
                                profileInfo={props.profileInfo}
                                playlistDescription={props.playlistDescription}
                                playlistTitle={props.playlistTitle}
                                setPlaylistDescription={props.setPlaylistDescription}
                                setPlaylistTitle={props.setPlaylistTitle}
                                choosePlaylist={props.choosePlaylist}
                                />
                        </div>
                    ))}  
            </div>
                        
        </div>
    )
}

export default ListView
