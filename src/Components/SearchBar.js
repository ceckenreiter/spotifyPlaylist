import React from "react";
import "../css/SearchBar.css"; 
import SearchButton from "../buttons/SearchButton";

function SearchBar (props, searchInput, setSearchInput, display, setDisplay, searchResults, setSearchResults, albumList, setAlbumList, trackList, setTrackList, creatingPlaylist, setCreatingPlaylist, profileInfo, myPlaylists, choosePlaylist) {

    const handleChange = (e) => {
        e.preventDefault();
        props.setSearchInput(e.target.value); 
    } 

    return (
        <div>
            <div>
                <form>
                    <input
                        id='SearchBar'
                        type="text"
                        value={props.searchInput}
                        onChange={handleChange}
                    />
                    <SearchButton 
                        setDisplay={props.setDisplay}
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
                        profileInfo={props.profileInfo}
                        myPlaylists={props.myPlaylists}
                        choosePlaylist={props.choosePlaylist}
                    />
                </form>
            </div>
        </div>
    )
};  
 



export default SearchBar; 