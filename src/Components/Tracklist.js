import React from "react";
import '../css/Tracklist.css';
import CreatePlaylistButton from "../buttons/CreatePlaylistButton";


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
                                    <p>{item.name}</p>
                                </a>

                            </div>
                        ))}  
                </div>

                
                </div>
                <CreatePlaylistButton />
            </div>
        
    );
};

export default Tracklist; 