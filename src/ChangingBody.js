import React from "react";
import "./css/ChangingBody.css"; 
import trackList from "./SpotifyAPI";
import SearchedResults from "./SearchedResults";
import SearchButton from "./SearchButton";


function ChangingBody (props, searchInput, setSearchInput, display, setDisplay, NowPlaying, setNowPlaying, setAlbum, setArtist, Album, Artist) {
   
    const handleChange = (e) => {
        e.preventDefault();
        props.setSearchInput(e.target.value); 
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
                    <SearchButton 
                        searchInput={props.searchInput}
                        setDisplay = {props.setDisplay}
                        NowPlaying={props.NowPlaying}
                        setNowPlaying={props.setNowPlaying}
                        Album={props.Album}
                        Artist={props.Artist}
                        setAlbum={props.setAlbum} 
                        setArtist={props.setArtist}>
                        

                    </SearchButton>
                </form>
            </div>
            <div>{props.display}</div>
        </div>
    )
};  
 



export default ChangingBody; 