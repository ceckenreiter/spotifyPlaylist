import React from "react";
import Playlists from "./Playlists";
import ChangingBody from "./ChangingBody";
import Browse from "./Browse";


function Display (props, state, setThisHREF, isLogged, setPlaylistOverview, searchInput, display, setSearchInput, setDisplay, albumList, trackList, createNewPlaylist, updatePlaylist, myPlaylists, choosePlaylist) {

    if (props.isLogged===true) {
    return (
        <div className='SpecificContent'>
            <div className='left'>
                <Playlists 
                    setPlaylistOverview={props.setPlaylistOverview}
                    thisHREF={props.thisHREF}
                    setThisHREF={props.setThisHREF}
                    setDisplay={props.setDisplay}
                    createNewPlaylist={props.createNewPlaylist}     
                    myPlaylists={props.myPlaylists}
                />
            </div>
            <div className='right'>
                <ChangingBody 
                    searchInput={props.searchInput}
                    display={props.display}
                    setSearchInput={props.setSearchInput}
                    setDisplay={props.setDisplay}
                    albumList={props.albumList}
                    trackList = {props.trackList}
                    myPlaylists={props.myPlaylists}
                    choosePlaylist={props.choosePlaylist} 
                />
                <Browse 
                    setDisplay={props.setDisplay}
                    setPlaylistOverview={props.setPlaylistOverview}
                    state={props.state}
                    setThisHREF={props.setThisHREF}
                />
            </div>
        </div>
    )
} 

else {
    return (
        <div>Login To Use All of Our Features</div>
    )
}
}

export default Display