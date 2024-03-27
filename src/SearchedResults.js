import React from "react";
import './ChangingBody'
import './css/SearchedResults.css'
import PlayButton from "./PlayButton";
import ViewButton from "./ViewButton";
import AddToPlaylistButton from "./AddToPlaylistButton";


function SearchedResults (props, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist, display, setDisplay, thisPlaylist, setThisPlaylist) { 
    return (
        <div id='SearchedResults'>
            <p>Results for: {props.searchInput}</p>
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
                                <AddToPlaylistButton 
                                    value1={option.song}
                                    value2={option.artist}
                                    value3={option.album}
                                    Album={props.Album}
                                    setAlbum={props.setAlbum}
                                    setArtist={props.setArtist}
                                    Artist={props.Artist}
                                    thisPlaylist={props.thisPlaylist}
                                    setThisPlaylist={props.setThisPlaylist}
                                    />

                                </a>
                            </div>
                    ))}   
                </div>
            </div>

            <div id='ArtistResults'>
                <div className='List'>    
                <p>Artists</p>     
                    {props.artistList.map((option, index) => (
                            <div key={index}>
                                <a>
                                <span>{option.artist}</span>
                                <ViewButton 
                                    value1={option.song}
                                    value2={option.artist}
                                    value3={option.album}
                                    number={1}
                                    value={option.artist}
                                    display={props.display}
                                    setDisplay={props.setDisplay}
                                    Album={props.Album}
                                    setAlbum={props.setAlbum}
                                    setArtist={props.setArtist}
                                    Artist={props.Artist}
                                    NowPlaying={props.NowPlaying}
                                    setNowPlaying={props.setNowPlaying}
                                    thisPlaylist={props.thisPlaylist}
                                    setThisPlaylist={props.setThisPlaylist}/>
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
                                <ViewButton 
                                    number={2} 
                                    value1={option.song}
                                    value2={option.artist}
                                    value3={option.album}
                                    value={option.album}
                                    display={props.display}
                                    setDisplay={props.setDisplay}
                                    Album={props.Album}
                                    setAlbum={props.setAlbum}
                                    setArtist={props.setArtist}
                                    Artist={props.Artist}
                                    NowPlaying={props.NowPlaying}
                                    setNowPlaying={props.setNowPlaying}
                                    thisPlaylist={props.thisPlaylist}
                                    setThisPlaylist={props.setThisPlaylist}/>
                            </a>
                        </div>
                    ))}
           
                </div>
            </div>
    </div>
    )
    }; 

export default SearchedResults;  