import React from "react";
import ArtistAlbumView from './ArtistAlbumView'
import ArtistOverView from './ArtistOverview'
import ArtistSongView from './ArtistSongView'

function ViewButton (props, value1, value2, value4, value, display, setDisplay, NowPlaying, setNowPlaying, artist, setAlbum, album, setArtist, thisPlaylist, setThisPlaylist) {

    const handleClick = (e) => {
        e.preventDefault()
        

        if (props.number === 1) {
         props.setDisplay(
            <ArtistOverView 
            value={props.value}
            value1={props.value1}
            value2={props.value2}
            value3={props.value3}
            NowPlaying={props.NowPlaying} 
            setNowPlaying={props.setNowPlaying} 
            setDisplay={props.setDisplay}
            Artist={props.Artist}
            setArtist={props.setArtist}  
            Album = {props.Album}   
            setAlbum ={props.setAlbum}
            thisPlaylist={props.thisPlaylist}
            setThisPlaylist={props.setThisPlaylist}
            />
            )
        } else if (props.number === 2) {
            props.setDisplay(
             <ArtistAlbumView 
            NowPlaying={props.NowPlaying} 
            setNowPlaying={props.setNowPlaying} 
            setDisplay={props.setDisplay}
            Artist={props.Artist}
            setArtist={props.setArtist}  
            Album = {props.Album}   
            setAlbum ={props.setAlbum}
            thisPlaylist={props.thisPlaylist}
            setThisPlaylist={props.setThisPlaylist}/>

            )
        }


    }

    return (
        <button onClick={handleClick}>View</button>
    )
}

export default ViewButton