import React from "react";
import SearchBar from "./SearchBar";

function ChangingBody (props, searchInput, setSearchInput, display, setDisplay, searchResults, setSearchResults, albumList, setAlbumList, trackList, setTrackList, creatingPlaylist, setCreatingPlaylist, profileInfo) {

   

    return (
        <div>
            <SearchBar 
                profileInfo={props.profileInfo}
                setDisplay={props.setDisplay}
                setSearchInput={props.setSearchInput}
                display={props.display}
                searchInput={props.searchInput}
                searchResults = {props.searchResults}
                setSearchResults = {props.setSearchResults}
                setAlbumList = {props.setAlbumList}
                albumList={props.albumList}
                trackList={props.trackList}
                setTrackList={props.setTrackList}
                setCreatingPlaylist={props.setCreatingPlaylist}
                creatingPlaylist={props.creatingPlaylist}
            />
            <div>{props.display}</div>
        </div>
    )
};  
 

export default ChangingBody; 