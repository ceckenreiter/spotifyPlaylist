import React, {useState} from "react";
import ArtistAlbumView from '../Components/ArtistAlbumView'
import PlaylistView from "../Components/PlaylistView";
import ArtistOverView from '../Components/ArtistOverview'
import ArtistSongView from '../Components/ArtistSongView'

function ViewButton (props, name, display, setDisplay, number, value) {


    const handleClick = (e) => {
        e.preventDefault()
        if (props.number===1) {
            props.setDisplay(
                <ArtistAlbumView value={props.value}/>
                )
        } else if(props.number===2) {
            props.setDisplay( <PlaylistView />)
        } else {
            console.log('on no')
        }
    }

    return (
        <button onClick={handleClick}>View</button>
    )
}

export default ViewButton