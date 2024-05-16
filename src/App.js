import './css/App.css';
import React, {useState, useEffect} from 'react';
import LoginPage from './Components/LoginPage'
import ProfileInformation from './Components/ProfileInformation'
import GreetingsPage from './Components/GreetingsPage';
import NavigationBar from './Components/NavigationBar';
import Display from './Components/Display';
import PlaylistOverview from './Components/PlaylistOverview';



function App() {

  const [display, setDisplay] = useState(''); // changes display of changing body
  const [profileInfo, setProfileInfo] = useState([]) // saves profile info of user
  const [trackList, setTrackList] = useState([]) // for ArtistOverview
  const [isLogged, setIsLogged] = useState(false) // for testing if logged on
  const [username, setUsername] = useState('')



  const [searchInput, setSearchInput] = useState(""); // for search field
  const [albumList, setAlbumList] = useState([]) // for artistOverview
  const [searchResults, setSearchResults] = useState('');  //saves the returned results of search


  useEffect(() => {
    let token = window.localStorage.getItem('token')
    
    var authParam = {
        method: 'GET', 
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urelencoded"
        },
    }
    if (searchInput !== '') {
    fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist%2Calbum%2Ctrack`, authParam)
    .then(response => response.json())
    .then(result => { 
        setSearchResults(result)
        setAlbumList(result.albums.items)
        setTrackList(result.tracks.items)
    })
    .catch(error => console.log(error))
  }
}, [searchInput])



const [thisList, setThisList] = useState([])
const [playlistTitle, setPlaylistTitle] = useState('')
const [playlistDescription, setPlaylistDescription] = useState('')
const [thisHREF, setThisHREF] = useState('')
const [creator, setCreator] = useState('')


    useEffect(() => {
        let token = window.localStorage.getItem('token')
        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }
        if (thisHREF !== '') {
          const blankFunction = async() => {
            let token = window.localStorage.getItem('token')
            var authParam = {
                method: 'GET', 
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urelencoded"
                }
            }
            const result = await fetch(`${thisHREF}`, authParam)
            const result2 = result.json()
            result2.then(response => {
                setPlaylistTitle(response.name)
                setPlaylistDescription(response.description)
                setCreator(response.owner.display_name)
                console.log(response)
                setThisList(response.tracks.items)
                setDisplay(
                  <PlaylistOverview 
                    setDisplay={setDisplay}
                    display={display}
                    thisList={response.tracks.items}
                    setThisList={setThisList}
                    playlistTitle={response.name}
                    playlistDescription={response.description}
                    setPlaylistTitle={setPlaylistTitle}
                    setPlaylistDescription={setPlaylistDescription}
                    thisHREF={thisHREF}
                    setCreator={setCreator}
                    creator={response.owner.display_name}
                    profileInfo={profileInfo}
                  />)
            })
          .catch(response => console.log)
        }
        
        blankFunction()
              
        }
    }, [thisHREF])
  


    const [state, setState] = useState([])
    useEffect(() => {
        let token = window.localStorage.getItem('token')
        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }
    
        fetch("https://api.spotify.com/v1/browse/categories", authParam)
        .then(response => response.json())
        .then(result => { 
            setState(result.categories.items)
        })
        .catch(error => console.log(error))
  }, [])
    





  

  const CLIENT_ID = '740dffe0e2cd4743995272820b7f8ec8';
  const CLIENT_SECRET = "16d3b53ef9804a7387b3fdbe6e11293f"


  return (
    <div id='App'>
      <NavigationBar 
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
        username={username}
        setUsername={setUsername}
      />

      <GreetingsPage />

      <LoginPage 
        ID={CLIENT_ID}
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        username={username}
        setUsername={setUsername} 
      />
      
      <ProfileInformation 
        ID={CLIENT_ID}
        SECRET={CLIENT_SECRET}
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
        username={username}
        setUsername={setUsername}
      />

      <Display 
        isLogged={isLogged}
        state={state}
        setState={setState}
        searchInput={searchInput}
        display={display}
        setSearchInput={setSearchInput}
        setDisplay={setDisplay}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setAlbumList={setAlbumList}
        albumList={albumList}
        trackList = {trackList}
        setTrackList = {setTrackList}
        creator={creator}
        setCreator={setCreator}
        thisList={thisList}
        setThisList={setThisList}
        thisHREF={thisHREF}
        setThisHREF={setThisHREF}
        setProfileInfo={setProfileInfo}
        profileInfo={profileInfo}
        username={username}
        setUsername={setUsername}
        playlistDescription={playlistDescription}
        playlistTitle={playlistTitle}
        setPlaylistDescription={setPlaylistDescription}
        setPlaylistTitle = {setPlaylistTitle}

      />
     </div>
  );
}; 


export default App;
