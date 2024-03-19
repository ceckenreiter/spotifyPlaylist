import React, { useState} from "react";
import "./css/ChangingBody.css"; 
import trackList from "./SpotifyAPI";
import SearchedResults from "./SearchedResults";


function ChangingBody (props, searchInput, setSearchInput, display, setDisplay, NowPlaying, setNowPlaying) {

    const [count, setCount] = useState(0); 
   
    const handleChange = (e) => {
        e.preventDefault();
        props.setSearchInput(e.target.value); 
    }; 

    const handleClick = (e) => {
        e.preventDefault()
        setCount((prevState) => prevState + 1);
        const result = trackList.filter((options) => options.artist === props.searchInput);
        props.setDisplay(
            <SearchedResults 
                NowPlaying={props.NowPlaying} 
                setNowPlaying={props.setNowPlaying} 
                list={result} 
            />
        )
    }; 

    return (
        <div>
            <div>
                <form>
                    <input
                        id='SearchBar'
                        type="text"
                        value={props.searchInput}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>{count}</button>
                </form>
            </div>
            <div>{props.display}</div>
        </div>
)
};  
 



export default ChangingBody; 