import React from "react";
import ArtistAlbumView from '../Components/ArtistAlbumView'
import ListView from "../Components/ListView";


function ViewButton (props, itemID, thisHREF, setThisHREF, thisList, setThisList,  title, display, setDisplay, number, id, href, creatingPlaylist, setCreatingPlaylist, profileInfo, playlistDescription, playlistTitle, setPlaylistDescription, setPlaylistTitle) {

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
                    setThisHREF={props.setThisHREF}
                    thisHREF={props.thisHREF}
                    thisList={props.thisList}
                    setThisList={props.setThisList}
                    
                />)
        } else if (props.number===3) {
            props.setThisHREF(props.href)

        }
    }

    return (
        <button onClick={handleClick}>View</button>
    )
}

export default ViewButton