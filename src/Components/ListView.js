import React, {useState, useEffect} from "react"
import ViewButton from "../buttons/ViewButton"

function ListView (props, setThisHREF, href) {
    
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
                                href={item.href} 
                                setThisHREF={props.setThisHREF}
                                number={3} 
                                />
                        </div>
                    ))}  
            </div>
                        
        </div>
    )
}

export default ListView
