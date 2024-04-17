import React, {useState, useEffect} from "react";

function CreatePlaylist (props, setProfileInfo, profileInfo) {

    const handleChange = (e) => {

    }

    return (
        <form>
            <h1>Title</h1>
            <p></p>
            <input 
                type='text'
                value={props.username}
                onChange={handleChange}
            />
        </form>
        
        
    )
}

export default CreatePlaylist