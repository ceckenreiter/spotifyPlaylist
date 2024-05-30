import React from "react";
import '../css/PlaylistOverview.css'; 
import AddToPlaylistButton from "../buttons/AddToPlaylistButton";
import EditPlaylistButton from "../buttons/EditPlaylistButton";
import AddToPlaylist from "../Components/AddToPlaylist"; 


function PlaylistOverview (props, profileInfo, updatePlaylist, setDisplay, playlistDescription, playlistTitle, thisList, creator, deletePlaylist, playlistID, choosePlaylist, myPlaylists, removeFromPlaylist) {
    
    let blank = props.thisList

    if (blank.length<1) {
        return (
            <div id='PlaylistOverview'>
            <h1>{props.playlistTitle}</h1>
            <p>Created By: {props.creator}</p>
            <p>{props.playlistDescription}</p>
            <EditPlaylistButton
                thisList={props.thisList}
                playlistID={props.playlistID} 
                profileInfo={props.profileInfo} 
                playlistTitle={props.playlistTitle} 
                playlistDescription={props.playlistDescription}
                creator={props.creator} 
                setDisplay={props.setDisplay} 
                deletePlaylist={props.deletePlaylist}
                removeFromPlaylist={props.removeFromPlaylist}
                updatePlaylist={props.updatePlaylist}
                />  
            <p>No Songs</p>
            <AddToPlaylist 
                playlistDescription={props.playlistDescription}
                playlistTitle={props.playlistTitle}
                profileInfo={props.profileInfo}/>
            </div>
        )
    }

    return (
        <div id='PlaylistOverview'>
            <h1>{props.playlistTitle}</h1>
            <p>Created By: {props.creator}</p>
            <p>{props.playlistDescription}</p>
            <EditPlaylistButton
                thisList={props.thisList}
                playlistID={props.playlistID} 
                profileInfo={props.profileInfo} 
                playlistTitle={props.playlistTitle} 
                playlistDescription={props.playlistDescription}
                creator={props.creator} 
                setDisplay={props.setDisplay} 
                deletePlaylist={props.deletePlaylist}
                removeFromPlaylist={props.removeFromPlaylist}
                updatePlaylist={props.updatePlaylist}
                
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