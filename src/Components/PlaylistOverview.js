import React from "react";
import '../css/PlaylistOverview.css'; 
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";
import EditPlaylistButton from "../buttons/EditPlaylistButton";


function PlaylistOverview (props, href, profileInfo, setDisplay, setPlaylistDescription, setPlaylistTitle, playlistDescription, playlistTitle, thisList, setThisList, thisHREF, setThisHREF, creator, setCreator, updatePlaylist, createNewPlaylist, deletePlaylist, playlistID, choosePlaylist, myPlaylists, removeFromPlaylist) {
    
    let blank = props.thisList

    console.log(props.thisList)


    if (blank.length<1) {
        return (
            <div id='PlaylistOverview'>
            <h1>{props.playlistTitle}</h1>
            <p>Created By: {props.creator}</p>
            <p>{props.playlistDescription}</p>
            <EditPlaylistButton
                playlistID={props.playlistID} 
                profileInfo={props.profileInfo} 
                playlistTitle={props.playlistTitle} 
                playlistDescription={props.playlistDescription}
                creator={props.creator} 
                thisList={props.thisList} 
                setThisList={props.setThisList} 
                setDisplay={props.setDisplay} 
                setPlaylistDescription={props.setPlaylistDescription} 
                setPlaylistTitle={props.setPlaylistTitle}
                deletePlaylist={props.deletePlaylist}
                createNewPlaylist={props.createNewPlaylist}
                updatePlaylist={props.updatePlaylist}
                removeFromPlaylist={props.removeFromPlaylist}
                />  
            <p>No Songs</p>
            </div>
        )
    }

    return (
        <div id='PlaylistOverview'>
            <h1>{props.playlistTitle}</h1>
            <p>Created By: {props.creator}</p>
            <p>{props.playlistDescription}</p>
            <EditPlaylistButton
                playlistID={props.playlistID} 
                profileInfo={props.profileInfo} 
                playlistTitle={props.playlistTitle} 
                playlistDescription={props.playlistDescription}
                creator={props.creator} 
                thisList={props.thisList} 
                setThisList={props.setThisList} 
                setDisplay={props.setDisplay} 
                setPlaylistDescription={props.setPlaylistDescription} 
                setPlaylistTitle={props.setPlaylistTitle}
                deletePlaylist={props.deletePlaylist}
                createNewPlaylist={props.createNewPlaylist}
                updatePlaylist={props.updatePlaylist}
                removeFromPlaylist={props.removeFromPlaylist}
                
                />  
            <div className="list">
                {props.thisList.map((item, index) => (
                    <div key={index}>
                        <p>{index+1} {item.track.name}</p>
                        <p>{item.track.artists[0].name}</p>
                        <AddToPlaylistButton 
                            songURI={item.track.uri}
                            myPlaylists={props.myPlaylists}
                            setDisplay={props.setDisplay}
                            choosePlaylist={props.choosePlaylist}
                            
                            
                         />
                     </div>
                  
                ))}
                   
            </div> 
            
        </div>
    ); 
}; 

export default PlaylistOverview; 