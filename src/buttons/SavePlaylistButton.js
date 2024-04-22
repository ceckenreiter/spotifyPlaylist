import React, {useEffect} from "react";
import EditPlaylistView from "../Components/EditPlaylistView";

function SavePlaylistButton (props, name, username, description, profileInfo, setDisplay) {

    const handleSave = (e) => {
        props.setDisplay(<EditPlaylistView name={props.name} creator={props.profileInfo.display_name} />)

    }

    return (
        <div>
            <button onClick={handleSave}>Save Changes</button>
        </div>
    )
}

export default SavePlaylistButton