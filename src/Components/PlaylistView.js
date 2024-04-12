import React, {useState, useEffect} from "react"

function PlaylistView (props, id, href, number) {
    
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
            console.log(result.playlists)
            setThisPlaylist(result.playlists.items)

        })
        .catch(error => console.log(error))


    },[props.href])


    return (
        <div>
            <p>Browing for Playlists that are: {name} </p>
            <div className="options">
                    {thisPlaylist.map((item, index) => (
                        <div key={index}>
                            <p>{item.description}</p>
                        </div>
                    ))}  
            </div>
                        
        </div>
    )
}

export default PlaylistView
