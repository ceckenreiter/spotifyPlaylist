import React from "react";
import AddSongToPlaylist from "../Components/AddSongToPlaylist";


function AddToPlaylistButton (props, choosePlaylist, myPlaylists, songURI, setDisplay) {
    
    
    const handleClick = () => {

        props.setDisplay(
            <div>
                <p>Choose Which Playlist</p>
                <div className='Tracklist' >
                    {props.myPlaylists.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.id}</p>
                            <AddSongToPlaylist 
                                choosePlaylist={props.choosePlaylist} 
                                songURI={props.songURI} 
                                playlistID={item.id}
                                />
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