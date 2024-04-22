import React, {useState} from "react";
import Playlists from "./Playlists";
import ChangingBody from "./ChangingBody";
import Browse from "./Browse";


function Display (props, isLogged, searchInput, display, setSearchInput, setDisplay, setSearchResults, setAlbumList, albumList, trackList, setTrackList, creatingPlaylist, setCreatingPlaylist, setProfileInfo, profileInfo, username, setUsername) {

if (props.isLogged===true) {
    return (
        <div className='SpecificContent'>
            <div className='left'>
            <Playlists 
                creatingPlaylist={props.creatingPlaylist}
                setCreatingPlaylist={props.setCreatingPlaylist}

                display={props.display}
                setDisplay={props.setDisplay}
            
                setProfileInfo={props.setProfileInfo}
                profileInfo={props.profileInfo}

                username={props.username}
                setUsername={props.setUsername}
                />
            </div>
            <div className='right'>
                <ChangingBody 
                    searchInput={props.searchInput}
                    display={props.display}
                    setSearchInput={props.setSearchInput}
                    setDisplay={props.setDisplay}
                    searchResults={props.searchResults}
                    setSearchResults={props.setSearchResults}
                    setAlbumList={props.setAlbumList}
                    albumList={props.albumList}
                    trackList = {props.trackList}
                    setTrackList = {props.setTrackList}
                    creatingPlaylist={props.creatingPlaylist}
                    setCreatingPlaylist={props.setCreatingPlaylist}
                    setProfileInfo={props.setProfileInfo}
                    profileInfo={props.profileInfo}
                />
                <Browse 
                    setDisplay={props.setDisplay}
                    creatingPlaylist={props.creatingPlaylist}
                    setCreatingPlaylist={props.setCreatingPlaylist}
                    setProfileInfo={props.setProfileInfo}
                    profileInfo={props.profileInfo}
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