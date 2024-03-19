import React from "react";
import './ChangingBody'
import './css/SearchedResults.css'

function SearchedResults (props, NowPlaying, setNowPlaying ) { 

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
                                </a>
                                <button onClick={props.setNowPlaying(option.song)}>Play</button>
                            </div>
                    ))}
                   
                </div>
            </div>
    )
}; 

export default SearchedResults;  