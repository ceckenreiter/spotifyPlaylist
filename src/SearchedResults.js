import React, {useEffect, useState} from "react";
import './ChangingBody'
import './css/SearchedResults.css'
import PlayButton from "./PlayButton";
import ViewButton from "./ViewButton";
import AddToPlaylistButton from "./AddToPlaylistButton";


function SearchedResults (props, searchInput, setSearchResults, searchResults) {

    const [albumList, setAlbumList] = useState([])
    const [trackList, setTrackList] = useState([])

    useEffect(() => {
        let q=props.searchInput.stringify
        let token = window.localStorage.getItem('token')

        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }

        fetch(`https://api.spotify.com/v1/search?q=${props.searchInput}&type=artist%2Calbum%2Ctrack`, authParam)
        .then(response => response.json())
        .then(result => { 
            props.setSearchResults(result)
            setAlbumList(result.albums.items)
            console.log(albumList)
        })
        .catch(error => console.log(error))
    }, [props.searchInput])
   
    return (
        <div id='SearchedResults'>
            <p>Results for: {props.searchInput}</p> 
            <div className="tracks">
                    {albumList.map((item, index) => (
                        <div key={index}>
                            <p><a>{item.name}</a></p>
                        </div>
                    ))}  
            </div>
           
            
        </div>
    )
    }; 

export default SearchedResults;  