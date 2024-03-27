import React from "react";
import trackList from "./SpotifyAPI";
import PlayButton from "./PlayButton";
import './css/ArtistOverview.css'
import ViewButton from "./ViewButton";
import AddToPlaylistButton from "./AddToPlaylistButton";

function ArtistOverview (props, value, Album, setAlbum, Artst, setArtist, NowPlaying, setNowPlaying, thisPlaylist, setThisPlaylist) {

    let songList = trackList.filter((options) => options.artist === props.value);

    let albumList = trackList.filter((options) => options.artist === props.value)
    


    return (
        <div>
            <div>Image of Artist</div>
            <h1>{props.value}</h1>
            <div id='SongResults'>
                <div className='List'> 
                <p>Songs</p>
                    {songList.map((option, index) => (
                            <div key={index}>
                                <a>
                                <span>{option.song}</span>
                                <span>{option.album}</span>
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
                                    thisPlaylist={props.thisPlaylist}
                                    setThisPlaylist={props.setThisPlaylist}
                                    />
                                
                                </a>
                            </div>
                    ))}   
                </div>
            </div>
            <div id='AlbumResults'>
                <div className='List'> 
                <p>Albums</p>
                    {albumList.map((song, index) => (
                            <div key={index}>
                                <a>
                               <span>{song.album}</span>
                                <ViewButton 
                                    number={2} 
                                    value1={song.song}
                                    value2={song.artist}
                                    value3={song.album}
                                    value={song.album}
                                    albumList={albumList}
                                    display={props.display}
                                    setDisplay={props.setDisplay}
                                    Album={props.Album}
                                    setAlbum={props.setAlbum}
                                    setArtist={props.setArtist}
                                    Artist={props.Artist}
                                    NowPlaying={props.NowPlaying}
                                    setNowPlaying={props.setNowPlaying}
                                    thisPlaylist={props.thisPlaylist}
                                    setThisPlaylist={props.setThisPlaylist}
                                    />
                                </a>
                            </div>
                    ))}   
                </div>
            </div>
        </div>
    ); 
}; 

export default ArtistOverview; 