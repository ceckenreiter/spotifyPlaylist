import React, { useEffect, useState } from "react";

function ArtistAlbumView (props, value) {

    const [album, setAlbum] = useState('')
    const [image, setImage] = useState('')
    const [artists, setArtists] = useState([])
    const [trackList, setTrackList] = useState([])

    const albumID = props.value; 

 
    useEffect(() => {
        let token = window.localStorage.getItem('token')
        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }
        fetch(`https://api.spotify.com/v1/albums/${albumID}`, authParam)
        .then(response => response.json())
        .then(result => { 
          setAlbum(result)
          setImage(result.images[0].url)
          setArtists(result.artists)
          setTrackList(result.tracks.items)         
        })
        .catch(error => console.log(error))
        }, [albumID])


    return (
        <div>
            <h1>Artist Album Overview</h1>
            <p>{album.name}</p>
            <img alt='alt text' src={image}></img>
            <p>{album.release_date}</p>
            <div className="artists">
                {artists.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                            </div>
                        ))}  
            </div>
            <div className="tracks">
                {trackList.map((item, index) => (
                            <div key={index}>
                                <p>{item.track_number}: {item.name}</p>
                            </div>
                        ))}  
            </div>
               
        </div>
    ); 
}; 

export default ArtistAlbumView; 