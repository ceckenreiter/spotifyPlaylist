import React from "react";
import './ChangingBody'
import './css/SearchedResults.css'
import PlayButton from "./PlayButton";


function SearchedResults (props, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist) { 



    return (
            <div id='SearchedResults'>
                <p>Results for: {props.value}</p>
                <div className='List'>
                                
                    {props.list.map((option, index) => (
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
    )
}; 

export default SearchedResults;  