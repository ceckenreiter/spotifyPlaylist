import React from "react";
import "../css/ChangingBody.css"; 
import SearchButton from "../buttons/SearchButton";

function ChangingBody (props, searchInput, setSearchInput, display, setDisplay, searchResults, setSearchResults, albumList, setAlbumList, trackList, setTrackList, creatingPlaylist, setCreatingPlaylist,
    
    NowPlaying, setNowPlaying) {

   
    const handleChange = (e) => {
        e.preventDefault();
        props.setSearchInput(e.target.value); 
    }; 

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
                        searchInput={props.searchInput}
                        display={props.display}
                        setDisplay = {props.setDisplay}
                        searchResults = {props.searchResults}
                        setSearchResults = {props.setSearchResults}
                        setAlbumList={props.setAlbumList}
                        albumList={props.albumList}
                        trackList={props.trackList}
                        setTrackList={props.setTrackList}
                        setCreatingPlaylist={props.setCreatingPlaylist}
                        creatingPlaylist={props.creatingPlaylist}
                    />
                    
                </form>
            </div>
            <div>{props.display}</div>
        </div>
    )
};  
 



export default ChangingBody; 