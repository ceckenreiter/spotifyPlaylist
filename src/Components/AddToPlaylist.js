import React from "react";

function AddToPlayListView (props, playlistTitle, playlistDescription, profileInfo) {
    
    const getStuff = () => {
        console.log(props.playlistTitle)
        console.log(props.playlistDescription)
        return (props.playlistTitle, props.playlistDescription)
    }

    getStuff()

    const handleSave = async(e) => {
        e.preventDefault()

        

        let token = window.localStorage.getItem('token')

        let data = {
            'name': props.playlistTitle,
            'description': props.playlistDescription,
        }

        const blank = await fetch(`https://api.spotify.com/v1/users/${props.profileInfo.display_name}/playlists`, {
                method: 'POST', 
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urelencoded"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => { 
                console.log(result)
            })
            .catch(error => console.log(error))
    }




    return (
        <div>
            <p>{props.playlistTitle}</p>
            <p>{props.playlistDescription}</p>
        <button onClick={handleSave}>Lets add some songs now</button>
        </div>
    )

}

export default AddToPlayListView