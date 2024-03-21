import React from "react";
import './ChangingBody'
import './css/SearchedResults.css'
import PlayButton from "./PlayButton";


function SearchedResults (props, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist) { 

  


    return (
        <div id='SearchedResults'>
            <p>Results for: {props.searchInput}</p>
            <div id='ArtistResults'>
                <p>Artists</p>
                <div className='List'>         
                    {props.artistList.map((option, index) => (
                            <div key={index}>
                                <a>
                                <span>{option.artist}</span>
                               
                                </a>
                            </div>
                    ))}  
                </div>
            </div>

            <div id='SongResults'>
                <div className='List'> 
                <p>Songs</p>
                    {props.songList.map((option, index) => (
                            <div key={index}>
                                <a>
                                <span>{option.song}</span>
                                <span>{option.album}</span>
                                <span>{option.artist}</span>
                                <PlayButton
                                    value1={option.song}
                                    value2={option.artist}
                                    value3={option.album}
                                    Album={props.Album}
                                    setAlbum={props.setAlbum}
                                    setArtist={props.setArtist}
                                    Artist={props.Artist}
                                    NowPlaying={props.NowPlaying}
                                    setNowPlaying={props.setNowPlaying}
                                />
                                </a>
                            </div>
                    ))}   
                </div>
            </div>
       
            <div id='AlbumResults'>
                <div className='List'>
                    <p>Albums</p>
                    {props.albumList.map((option, index) => (
                        <div key={index}>
                            <a>
                                <span>{option.album}</span>
                                <span>{option.artist}</span>
                            </a>
                        </div>
                    ))}
           
                </div>
            </div>
    </div>
    )
    }; 

export default SearchedResults;  