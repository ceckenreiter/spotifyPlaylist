import React from "react";
import ArtistAlbumView from '../Components/ArtistAlbumView'
import ListView from "../Components/ListView";


function ViewButton (props, setThisHREF, setDisplay, number, id, href, choosePlaylist, myPlaylists, setPlaylistOverview) {

    const handleClick = (e) => {

        e.preventDefault()
        if (props.number===1) {
            props.setDisplay(
                <ArtistAlbumView 
                    value={props.id} 
                    choosePlaylist={props.choosePlaylist}
                    myPlaylists={props.myPlaylists}                    
                    setDisplay={props.setDisplay}
                />)
        } else if(props.number===2) {
            props.setDisplay( 
                <ListView 
                    href={props.href} 
                    setThisHREF={props.setThisHREF}
                    setPlaylistOverview={props.setPlaylistOverview}
                />)
        } else if (props.number===3) {
            props.setThisHREF(props.href)
            const changePlaylist = async() => {
                 const blank = () => {
                    props.setThisHREF(props.href)
                    return props.href
                }
                const value = await blank()
                props.setPlaylistOverview(value);
            }
            changePlaylist()
        }
    }

    return (
        <button onClick={handleClick}>View</button>
    )
}

export default ViewButton