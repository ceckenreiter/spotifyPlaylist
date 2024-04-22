import React, {useState, useEffect} from "react"
import ViewButton from "../buttons/ViewButton"

function ListView (props, id, href, number, setDisplay, display, creatingPlaylist, setCreatingPlaylist, clickedSong, setClickedSong, profileInfo) {
    
    const [thisPlaylist, setThisPlaylist]= useState([])

    const [name, setName] = useState('')


    useEffect(() => {
        let thisHREF = props.href
        let token = window.localStorage.getItem('token')

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }

        fetch(`${thisHREF}/playlists?limit=5`, authParam)
        .then(response => response.json())
        .then(result => { 
            setName(result.message)
            setThisPlaylist(result.playlists.items)
        })
        .catch(error => console.log(error))


    },[props.href])


    return (
        <div>
            <p>Browsing for Playlists that are: {name} </p>
            <div className="options">
                    {thisPlaylist.map((item, index) => (
                        <div key={index}>
                            <p>{item.description}</p>
                            <p>{item.tracks.total}</p>
                            <ViewButton setDisplay={props.setDisplay} display={props.display} href={item.href} number={3} creatingPlaylist={props.creatingPlaylist} setCreatingPlaylist={props.setCreatingPlaylist} clickedSong={props.clickedSong}
                                    setClickedSong={props.setClickedSong} profileInfo={props.profileInfo}/>
                        </div>
                    ))}  
            </div>
                        
        </div>
    )
}

export default ListView
