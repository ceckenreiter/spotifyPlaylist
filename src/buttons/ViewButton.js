import React from "react";
import ArtistAlbumView from '../Components/ArtistAlbumView'
import ListView from "../Components/ListView";
import PlaylistOverview from "../Components/PlaylistOverview";


function ViewButton (props, title, display, setDisplay, number, id, href, creatingPlaylist, setCreatingPlaylist, profileInfo, playlistDescription, playlistTitle, setPlaylistDescription, setPlaylistTitle) {

    const handleClick = (e) => {

        e.preventDefault()
        if (props.number===1) {
            props.setDisplay(
                <ArtistAlbumView 
                    value={props.id} 
                    creatingPlaylist={props.creatingPlaylist} 
                    setCreatingPlaylist={props.setCreatingPlaylist} 
                    
                    profileInfo={props.profileInfo} 
                    setDisplay={props.setDisplay}
                />)
        } else if(props.number===2) {
            props.setDisplay( 
                <ListView 
                    number={props.number} 
                    id={props.id} 
                    href={props.href} 
                    display={props.display} 
                    setDisplay={props.setDisplay} 
                    creatingPlaylist={props.creatingPlaylist} 
                    setCreatingPlaylist={props.setCreatingPlaylist} 
                    profileInfo={props.profileInfo} 
                    playlistDescription={props.playlistDescription}
                    playlistTitle={props.playlistTitle}
                    setPlaylistDescription={props.setPlaylistDescription}
                    setPlaylistTitle={props.setPlaylistTitle}
                />)
        } else if (props.number===3) {
            props.setDisplay( 
                <PlaylistOverview 
                    href={props.href} 
                    creatingPlaylist={props.creatingPlaylist} 
                    setCreatingPlaylist={props.setCreatingPlaylist} 
                    profileInfo={props.profileInfo} 
                    setDisplay={props.setDisplay} 
                    playlistDescription={props.playlistDescription}
                    playlistTitle={props.playlistTitle}
                    setPlaylistDescription={props.setPlaylistDescription}
                    setPlaylistTitle={props.setPlaylistTitle}
                />)
           
        }
    }

    return (
        <button onClick={handleClick}>View</button>
    )
}

export default ViewButton