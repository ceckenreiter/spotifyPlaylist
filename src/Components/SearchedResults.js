import React, {useEffect} from "react";
import './ChangingBody'
import '../css/SearchedResults.css'
import ViewButton from "../buttons/ViewButton";
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";


function SearchedResults (props, setDisplay, display, searchInput, setSearchResults, searchResults, albumList, setAlbumList, trackList, setTrackList, creatingPlaylist, setCreatingPlaylist, profileInfo) {

    useEffect(() => {
        let token = window.localStorage.getItem('token')
        

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }

        fetch(`https://api.spotify.com/v1/search?q=${props.searchInput}&type=artist%2Calbum%2Ctrack`, authParam)
        .then(response => response.json())
        .then(result => { 
            props.setSearchResults(result)
            props.setAlbumList(result.albums.items)
            props.setTrackList(result.tracks.items)
        })
        .catch(error => console.log(error))
    },)
   
    return (
        <div id='SearchedResults'>
            <p>Results for: {props.searchInput}</p> 
            <div className = 'albums'>
                <p>Albums</p>
                <div className="options">
                        {props.albumList.map((item, index) => (
                            <div key={index}>
                                <a href={item.uri}>
                                    <img src={item.images[0].url} height='150px' width='150px'></img>  
                                </a>
                                <ViewButton  display={props.display} setDisplay={props.setDisplay} number={1} id={item.id} creatingPlaylist={props.creatingPlaylist} setCreatingPlaylist={props.setCreatingPlaylist} profileInfo={props.profileInfo}/>
                            </div>
                        ))}  
                </div>
                
            </div>
            <div className="tracks">
                <p>Tracks</p>
                <div>
                        {props.trackList.map((item, index) => (
                            <div className="track-options" key={index}>
                                <a>
                                    <p>{item.name}</p>
                                    <p>{item.album.name}</p>
                                    <p>{item.artists[0].name}</p>
                                </a>
                                <AddToPlaylistButton 
                                    song={item.name}
                                    artist={item.artists[0].name}
                                    creatingPlaylist={props.creatingPlaylist}
                                    setCreatingPlaylist={props.setCreatingPlaylist}
                                    profileInfo={props.profileInfo}/>
                            </div>
                        ))}  
                </div>
            </div>
           
            
        </div>
    )
    }; 

export default SearchedResults;  