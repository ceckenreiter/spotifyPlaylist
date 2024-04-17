import React from "react";
import '../css/Tracklist.css';
import RemoveFromPlaylistButton from "../buttons/RemoveFromPlaylistButton";


function Tracklist(props, creatingPlaylist, setCreatingPlaylist) {

    return (
        <div>
            <div className='Tracklist' >
                <h1>Tracklist</h1>
                <div className="options">
                    {props.creatingPlaylist.map((item, index) => (
                        <div key={index}>
                                <a>
                                    <p>{item.song}</p>
                                    <RemoveFromPlaylistButton 
                                        song={item.song}
                                        creatingPlaylist={props.creatingPlaylist}
                                        setCreatingPlaylist={props.setCreatingPlaylist}/>
                                </a>

                        </div>
                        ))}  
                </div>

                
            </div>
            
        </div>
        
    );
};

export default Tracklist; 