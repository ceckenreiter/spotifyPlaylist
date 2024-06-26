import React from "react";
import './ChangingBody'
import '../css/SearchedResults.css'
import ViewButton from "../buttons/ViewButton";
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";


function SearchedResults (props, setDisplay, searchInput, albumList, trackList, myPlaylists, choosePlaylist) {
   
    return (
        <div id='SearchedResults'>
            <p>Results for: {props.searchInput}</p> 
            <div className = 'albums'>
                <p>Albums</p>
                <div className="options">
                        {props.albumList.map((item, index) => (
                            <div key={index}>
                                <a href={item.uri}>
                                    <img src={item.images[0].url} alt='' height='150px' width='150px'></img>  
                                </a>
                                <ViewButton  
                                    setDisplay={props.setDisplay} 
                                    number={1} 
                                    id={item.id} 
                                    choosePlaylist={props.choosePlaylist} 
                                    myPlaylists={props.myPlaylists}/>
                            </div>
                        ))}  
                </div>
                
            </div>
            <div className="tracks">
                <p>Tracks</p>
                <div>
                        {props.trackList.map((item, index) => (
                            <div className="track-options" key={index}>
                                <button >
                                    <p>{item.name}</p>
                                    <p>{item.album.name}</p>
                                    <p>{item.artists[0].name}</p>
                                    <p>{item.uri}</p>
                                </button>
                                <AddToPlaylistButton 
                                    choosePlaylist={props.choosePlaylist}
                                    myPlaylists={props.myPlaylists}
                                    songURI={item.uri}
                                    setDisplay={props.setDisplay}
                                />
                            </div>
                        ))}  
                </div>
            </div>
           
            
        </div>
    )
    }; 

export default SearchedResults;  