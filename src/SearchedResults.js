import React, {useEffect} from "react";
import './ChangingBody'
import './css/SearchedResults.css'
import PlayButton from "./PlayButton";
import ViewButton from "./ViewButton";
import AddToPlaylistButton from "./AddToPlaylistButton";


function SearchedResults (props, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist, display, setDisplay, thisPlaylist, setThisPlaylist) { 


    useEffect(() => {
        let q=props.searchInput.stringify
        let token = window.localStorage.getItem('token')

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }

        fetch(`https://api.spotify.com/v1/search?q=${props.searchInput}&type=artist%2Calbum%2Ctrack`, authParam)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
    }, [props.searchInput])
   
   
   
   
   
    return (
        <div id='SearchedResults'>
            <p>Results for: {props.searchInput}</p>
            <div id='SongResults'>
                <div className='List'> 
                <p>Songs</p>
                </div>
            </div>

            <div id='ArtistResults'>
                <div className='List'>    
                <p>Artists</p>     
                     
                </div>
            </div>
       
            <div id='AlbumResults'>
                <div className='List'>
                    <p>Albums</p>
                    
           
                </div>
            </div>
    </div>
    )
    }; 

export default SearchedResults;  