import React from "react";
import SearchBar from "./SearchBar";

function ChangingBody (props, searchInput, setSearchInput, display, setDisplay, albumList, trackList, myPlaylists, choosePlaylist) {

   

    return (
        <div>
            <SearchBar 
                setDisplay={props.setDisplay}
                setSearchInput={props.setSearchInput}
                searchInput={props.searchInput}
                albumList={props.albumList}
                trackList={props.trackList}
                myPlaylists={props.myPlaylists}
                choosePlaylist={props.choosePlaylist}
            />
            <div>{props.display}</div>
        </div>
    )
};  
 

export default ChangingBody; 