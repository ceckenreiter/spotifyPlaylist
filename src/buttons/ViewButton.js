import React from "react";
import ArtistAlbumView from '../Components/ArtistAlbumView'
import PlaylistView from "../Components/PlaylistView";

function ViewButton (props, name, display, setDisplay, number, id, href, creatingPlaylist, setCreatingPlaylist) {


    const handleClick = (e) => {
        e.preventDefault()
        if (props.number===1) {
            props.setDisplay(
                <ArtistAlbumView value={props.id} creatingPlaylist={props.creatingPlaylist} setCreatingPlaylist={props.setCreatingPlaylist}/>
                )
        } else if(props.number===2) {
            props.setDisplay( <PlaylistView number={props.number} id={props.id} href={props.href} name={props.name}/>)
        } else {
            console.log('on no')
        }
    }

    return (
        <button onClick={handleClick}>View</button>
    )
}

export default ViewButton