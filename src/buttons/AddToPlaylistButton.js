import React from "react";

function AddToPlaylistButton (props, myPlaylists, uri, setDisplay) {
    
    
    const handleClick = () => {

        props.setDisplay(
            <div>
                <p>Choose Which Playlist</p>
                <div className='Tracklist' >
                    {props.myPlaylists.map((item, index) => (
                        <div key={index}>
                            <button setDisplay={props.setDisplay} uri={props.uri} id={item.id}>{item.name}</button>
                        </div>
                    ))}
                
                    </div>
            </div>
        )

        

        


    }

    return (
        <button onClick={handleClick}>+</button>
    )
}

export default AddToPlaylistButton