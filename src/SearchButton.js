import React from "react";
import trackList from "./SpotifyAPI";
import SearchedResults from "./SearchedResults";




function SearchButton(props, setDisplay, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist) {

    const handleClick = (e) => {
        e.preventDefault();
        const result = trackList.filter((options) => options.artist === props.searchInput);
        props.setDisplay(
            <SearchedResults 
                NowPlaying={props.NowPlaying} 
                setNowPlaying={props.setNowPlaying} 
                list={result} 
                Album={props.Album}
                Artist={props.Artist}
                setAlbum={props.setAlbum} 
                setArtist={props.setArtist}
            /> 
            )
    }

    return (
        <button onClick={handleClick}>Search</button>
    )

}

export default SearchButton