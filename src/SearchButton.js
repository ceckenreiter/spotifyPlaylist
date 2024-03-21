import React from "react";
import trackList from "./SpotifyAPI";
import SearchedResults from "./SearchedResults";




function SearchButton(props, setDisplay, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist) {

    const handleClick = (e) => {
        e.preventDefault();
        const songList = trackList.filter((options) => options.song === props.searchInput);
        
        const artistList = trackList.filter((options) => options.artist === props.searchInput);
        let artistIndex = artistList.findLastIndex((options)=>options.artist ===props.searchInput)
        let checkedArtist = artistList.slice(artistIndex)
       
        const albumList = trackList.filter((options) => options.album === props.searchInput);
        let albumIndex = albumList.findLastIndex((options)=>options.artist ===props.searchInput)
        let checkedAlbum = albumList.slice(albumIndex)
        
        props.setDisplay(
            <SearchedResults 
                searchInput={props.searchInput}
                NowPlaying={props.NowPlaying} 
                setNowPlaying={props.setNowPlaying} 
                songList={songList} 
                artistList={checkedArtist}
                albumList={checkedAlbum}
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