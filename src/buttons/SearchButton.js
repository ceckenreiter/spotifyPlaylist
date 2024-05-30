import React from "react";
import SearchedResults from "../Components/SearchedResults";




function SearchButton(props, setDisplay, searchInput, albumList, trackList, myPlaylists, choosePlaylist) {

    const handleClick = (e) => {
        e.preventDefault();
        props.setDisplay(
            <SearchedResults 
                setDisplay={props.setDisplay}
                searchInput={props.searchInput}
                albumList={props.albumList}
                trackList={props.trackList}
                myPlaylists={props.myPlaylists}
                choosePlaylist={props.choosePlaylist}
            /> 
            )
    }

    return (
        <button onClick={handleClick}>Search</button>
    )

}

export default SearchButton