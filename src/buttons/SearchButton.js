import React from "react";
import SearchedResults from "../Components/SearchedResults";




function SearchButton(props, display, setDisplay, searchInput, searchResults, setSearchResults, albumList, setAlbumList, trackList, setTrackList) {

    const handleClick = (e) => {
        e.preventDefault();
        props.setDisplay(
            <SearchedResults 
                setDisplay={props.setDisplay}
                display = {props.display}
                searchInput={props.searchInput}
                searchResults = {props.searchResults}
                setSearchResults = {props.setSearchResults}
                setAlbumList = {props.setAlbumList}
                albumList={props.albumList}
                trackList={props.trackList}
                setTrackList={props.setTrackList}
            /> 
            )
    }

    return (
        <button onClick={handleClick}>Search</button>
    )

}

export default SearchButton