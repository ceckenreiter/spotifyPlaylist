import React from "react";
import ArtistAlbumView from '../Components/ArtistAlbumView'
import ListView from "../Components/ListView";
import PlaylistOverview from "../Components/PlaylistOverview";


function ViewButton (props, name, display, setDisplay, number, id, href, creatingPlaylist, setCreatingPlaylist, clickedSong, setClickedSong, profileInfo) {

    const handleClick = (e) => {
        e.preventDefault()
        if (props.number===1) {
            props.setDisplay(
                <ArtistAlbumView value={props.id} creatingPlaylist={props.creatingPlaylist} setCreatingPlaylist={props.setCreatingPlaylist} clickedSong={props.clickedSong}
                setClickedSong={props.setClickedSong} profileInfo={props.profileInfo} setDisplay={props.setDisplay}/>
                )
        } else if(props.number===2) {
            props.setDisplay( <ListView number={props.number} id={props.id} href={props.href} name={props.name} display={props.display} setDisplay={props.setDisplay} creatingPlaylist={props.creatingPlaylist} setCreatingPlaylist={props.setCreatingPlaylist} clickedSong={props.clickedSong}
                setClickedSong={props.setClickedSong} profileInfo={props.profileInfo} />)
        } else if (props.number===3) {
            props.setDisplay( <PlaylistOverview href={props.href} creatingPlaylist={props.creatingPlaylist} setCreatingPlaylist={props.setCreatingPlaylist} clickedSong={props.clickedSong}
                setClickedSong={props.setClickedSong} profileInfo={props.profileInfo} setDisplay={props.setDisplay}/>)
        }
    }

    return (
        <button onClick={handleClick}>View</button>
    )
}

export default ViewButton