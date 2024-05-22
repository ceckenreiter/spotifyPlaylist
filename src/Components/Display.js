import React from "react";
import Playlists from "./Playlists";
import ChangingBody from "./ChangingBody";
import Browse from "./Browse";


function Display (props, state, setState, thisHREF, setThisHREF, creator, setCreator, thisList, setThisList, isLogged, searchInput, display, setSearchInput, setDisplay, setSearchResults, setAlbumList, albumList, trackList, setTrackList, setProfileInfo, profileInfo, username, setUsername, setPlaylistDescription, setPlaylistTitle, playlistTitle, playlistDescription, createNewPlaylist, playlistID, deletePlaylist, setPlaylistID, updatePlaylist, myPlaylists, choosePlaylist) {


if (props.isLogged===true) {
    return (
        <div className='SpecificContent'>
            <div className='left'>
            <Playlists 
                thisList={props.thisList}
                setThisList={props.setThisList}
                thisHREF={props.thisHREF}
                setThisHREF={props.setThisHREF}
                playlistDescription={props.playlistDescription}
                playlistTitle={props.playlistTitle}
                setPlaylistDescription={props.setPlaylistDescription}
                setPlaylistTitle={props.setPlaylistTitle}
                display={props.display}
                setDisplay={props.setDisplay}
                setProfileInfo={props.setProfileInfo}
                profileInfo={props.profileInfo}
                username={props.username}
                setUsername={props.setUsername}
                setCreator={props.setCreator}
                creator={props.creator}
                createNewPlaylist={props.createNewPlaylist}     
                deletePlaylist={props.deletePlaylist}
                playlistID={props.playlistID}
                setPlaylistID={props.setPlaylistID}  
                updatePlaylist={props.updatePlaylist} 
                myPlaylists={props.myPlaylists}
                 />
            </div>
            <div className='right'>
                <ChangingBody 
                    searchInput={props.searchInput}
                    thisList={props.thisList}
                    setThisList={props.setThisList}
                    display={props.display}
                    setSearchInput={props.setSearchInput}
                    setDisplay={props.setDisplay}
                    searchResults={props.searchResults}
                    setSearchResults={props.setSearchResults}
                    setAlbumList={props.setAlbumList}
                    albumList={props.albumList}
                    trackList = {props.trackList}
                    setTrackList = {props.setTrackList}
                    setCreator={props.setCreator}
                    creator={props.creator}
                    setProfileInfo={props.setProfileInfo}
                    profileInfo={props.profileInfo}
                    playlistDescription={props.playlistDescription}
                    playlistTitle={props.playlistTitle}
                    setPlaylistDescription={props.setPlaylistDescription}
                    setPlaylistTitle={props.setPlaylistTitle}
                    myPlaylists={props.myPlaylists}
                    choosePlaylist={props.choosePlaylist}
                    
                />
                <Browse 
                    setDisplay={props.setDisplay}
                    thisList={props.thisList}
                    setState={props.setState}
                    state={props.state}
                    setThisList={props.setThisList}
                    creator={props.creator}
                    setCreator={props.setCreator}
                    thisHREF={props.thisHREF}
                    setThisHREF={props.setThisHREF}
                    setProfileInfo={props.setProfileInfo}
                    profileInfo={props.profileInfo}
                    playlistDescription={props.playlistDescription}
                    playlistTitle={props.playlistTitle}
                    setPlaylistDescription={props.setPlaylistDescription}
                    setPlaylistTitle={props.setPlaylistTitle}
                    myPlaylists={props.myPlaylists}
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