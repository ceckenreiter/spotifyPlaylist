import React from "react";
import "../css/SearchBar.css"; 
import SearchButton from "../buttons/SearchButton";

function SearchBar (props, searchInput, setSearchInput, setDisplay, albumList, trackList, myPlaylists, choosePlaylist) {

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
                        searchInput={props.searchInput}
                        albumList={props.albumList}
                        trackList={props.trackList}
                        myPlaylists={props.myPlaylists}
                        choosePlaylist={props.choosePlaylist}
                    />
                </form>
            </div>
        </div>
    )
};  
 



export default SearchBar; 