import './css/App.css';
import React, {useState, useEffect} from 'react';
import LoginPage from './Components/LoginPage'
import ProfileInformation from './Components/ProfileInformation'
import GreetingsPage from './Components/GreetingsPage';
import NavigationBar from './Components/NavigationBar';
import Display from './Components/Display';
import PlaylistOverview from './Components/PlaylistOverview';
import EditPlaylistView from './Components/EditPlaylistView';



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
const [playlistID, setPlaylistID] = useState('')
const [playlistTitle, setPlaylistTitle] = useState('')
const [playlistDescription, setPlaylistDescription] = useState('')
const [thisHREF, setThisHREF] = useState('')
const [creator, setCreator] = useState('')


    useEffect(() => {        
        if (thisHREF !== '') {
          const getPlaylist = async() => {
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
                setThisList(response.tracks.items)
                setPlaylistID(response.id)
                setDisplay(
                  <PlaylistOverview 
                    playlistID={response.id}
                    setPlaylistID={setPlaylistID}
                    deletePlaylist={deletePlaylist}
                    createNewPlaylist={createNewPlaylist}
                    setDisplay={setDisplay}
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
                    updatePlaylist={updatePlaylist}
                  />)
            })
          .catch(response => console.log(response))
        }
        
        getPlaylist()
              
        }
    }, [thisHREF, profileInfo])

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

  useEffect(() => {
    let token = window.localStorage.getItem('token')
    var authParam = {
        method: 'GET', 
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urelencoded"
        },
    }

    fetch('https://api.spotify.com/v1/me/playlists', authParam)
        .then(response => response.json())
        .then(result => { 
            setMyPlaylists(result.items)
        })
        .catch(error => console.log(error))
}, [])


  const [myPlaylists, setMyPlaylists] = useState([])

  const getMyPlaylists = () => {
    let token = window.localStorage.getItem('token')
    var authParam = {
        method: 'GET', 
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urelencoded"
        },
    }
    fetch('https://api.spotify.com/v1/me/playlists', authParam)
        .then(response => response.json())
        .then(result => { 
            setMyPlaylists(result.items)
        })
        .catch(error => console.log(error))
  }
  

  function createNewPlaylist(title, description) {
    setPlaylistTitle(title)
    setPlaylistDescription(description)
    console.log(title, description)

    const newPlaylist = async() => {

      let token = window.localStorage.getItem('token')

      let data = {
          'name': `${title}`,
          'description': `${description}`,
      }

      await fetch(`https://api.spotify.com/v1/users/${profileInfo.display_name}/playlists`, {
              method: 'POST', 
              headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/x-www-form-urelencoded"
              },
              body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(result => { 
              console.log(result)
              console.log(result.id)
              getMyPlaylists()
          })
          .catch(error => console.log(error))
    }
    newPlaylist()
    setDisplay(
      <EditPlaylistView 
        thisList={thisList}
        playlistTitle={title}
        playlistDescription={description}
        creator={profileInfo.display_name}
        updatePlaylist={updatePlaylist}
        createNewPlaylist={createNewPlaylist}
        deletePlaylist={deletePlaylist}
        playlistID={playlistID}
        setPlaylistID={setPlaylistID}
      />)
  }

  function updatePlaylist (title, description, ID) {
    const  update = async(url = '') => {
      let token = window.localStorage.getItem('token')
      let data = {
            'name': `${title}`,
            'description': `${description}`,
        }
  
        await fetch(`https://api.spotify.com/v1/playlists/${ID}`, {
                method: 'PUT', 
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urelencoded"
                },
                body: JSON.stringify(data)
            })
            .then(result => { 
                console.log(result)
                getMyPlaylists()

                
            })
            .catch(error => console.log(error))
    }
  
  update(`https://api.spotify.com/v1/playlists/${playlistID}/followers`)
  setDisplay(<p>Successfully Updated Playlist</p>)
  }

  function deletePlaylist (playlistID) {
    const  DeleteData = async(url = '') => {
      let token = window.localStorage.getItem('token')
      await fetch(url, 
          {
          method: "DELETE",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              },
          })
      .then(result => { 
          console.log(result)
          getMyPlaylists()

      })
      .catch(error => console.log(error))
  }
  
  DeleteData(`https://api.spotify.com/v1/playlists/${playlistID}/followers`)
  setDisplay(<p>Successfully Deleted Playlist</p>)
  }

  function choosePlaylist (id, uri) {
    const  choose = async() => {
      let token = window.localStorage.getItem('token')
      let data = {
          "uris": [],
          "position": 0
        }
  
        await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
                method: 'PUT', 
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urelencoded"
                },
                body: JSON.stringify(data)
            })
            .then(result => { 
                console.log(result)
                getMyPlaylists()

                
            })
            .catch(error => console.log(error))
    }
  
  choose(``)
  setDisplay(<p>Added Song</p>)
  }
    

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
        createNewPlaylist={createNewPlaylist}
        updatePlaylist={updatePlaylist}
        deletePlaylist={deletePlaylist}
        playlistID={playlistID}
        setPlaylistID={setPlaylistID}
        myPlaylists={myPlaylists}
       
      />
     </div>
  );
}; 


export default App;
