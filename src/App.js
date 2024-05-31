import './css/App.css';
import React, {useState, useEffect} from 'react';
import LoginPage from './Components/LoginPage'
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
  const [searchInput, setSearchInput] = useState(""); // for search field
  const [albumList, setAlbumList] = useState([]) // for artistOverview
  const [searchResults, setSearchResults] = useState('');  //saves the returned results of search
  const [thisList, setThisList] = useState([])
  const [playlistID, setPlaylistID] = useState('')
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [playlistDescription, setPlaylistDescription] = useState('')
  const [thisHREF, setThisHREF] = useState('')
  const [creator, setCreator] = useState('')
  const [myPlaylists, setMyPlaylists] = useState([])
  const [state, setState] = useState([])

  const CLIENT_ID = '740dffe0e2cd4743995272820b7f8ec8';


  const [token, setToken] = useState('')


  useEffect(() => {
      const hash = window.location.hash
      let value = window.localStorage.getItem('token')

      if (!value && hash) { //checks if we get a access token//
          var blank = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          window.location.hash=""
          window.localStorage.setItem('token', blank) 
          setIsLogged(true) 
      }
      setToken(window.localStorage.getItem("token")) //if so we extract the token part and set our token -- must be after if statement otherwise token is never set
  }, [])

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    var authParams = {
        method: 'GET', 
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urelencoded"
        },
        scopes: 'user-read-private user-read-email'
    }
      fetch('https://api.spotify.com/v1/me', authParams)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setProfileInfo(json)

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

  const setPlaylistOverview = (value) => { 

    if (1<0) { //this line is to use these variables that are not called //
    console.log(thisList, thisHREF, creator, searchResults)
    }
    const getPlaylist = async() => {
        let token = window.localStorage.getItem('token')
        var authParam = {
          method: 'GET', 
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urelencoded"
          }
        }
      await fetch(`${value}`, authParam)
        .then(response =>  response.json())
        .then(response => {
          console.log(response)
          setPlaylistTitle(response.name)
          setPlaylistDescription(response.description)
          setCreator(response.owner.display_name)
          setThisList(response.tracks.items)
          setPlaylistID(response.id)
          setDisplay(
            <PlaylistOverview 
              playlistID={response.id}
              updatePlaylist={updatePlaylist}
              deletePlaylist={deletePlaylist}
              setDisplay={setDisplay}
              thisList={response.tracks.items}
              playlistTitle={response.name}
              playlistDescription={response.description}
              creator={response.owner.display_name}
              profileInfo={profileInfo}
              choosePlaylist={choosePlaylist}
              myPlaylists={myPlaylists}
              removeFromPlaylist={removeFromPlaylist}
            />)
        })
        .catch(response => console.log(response))
      }
    getPlaylist()
  }

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
        setThisList([])
        getMyPlaylists()
      })
      .catch(error => console.log(error))
    }
    newPlaylist()
    setDisplay(
      <EditPlaylistView 
        thisList={[]}
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
        getMyPlaylists()
      })
      .catch(error => console.log(error))
    }
    update(`https://api.spotify.com/v1/playlists/${playlistID}/followers`)
    setDisplay(<p>Successfully Updated Playlist Please allow a few miutes to see changes</p>)
  }

  function deletePlaylist (playlistID) {
    const  DeleteData = async(url = '') => {
      let token = window.localStorage.getItem('token')
      await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(result => { 
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
          "uris": [`${uri}`],
        }
      await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: 'POST', 
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urelencoded"
        },
        body: JSON.stringify(data),
      })
      .then(result => { 
        getMyPlaylists()
      })
      .catch(error => console.log(error))
    }
    choose()
    window.alert('song added')
  }

  function removeFromPlaylist (id, uri) {
    const  remove = async() => {
      let token = window.localStorage.getItem('token')
      let data = {
          "tracks": [{'uri': `${uri}`}],
        }
      await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: 'DELETE', 
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urelencoded"
        },
        body: JSON.stringify(data),
      })
      .then(result => { 
        getMyPlaylists()
      })
      .catch(error => console.log(error))
      await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: 'GET', 
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urelencoded"
        }
        })
      .then(result => result.json())
      .then(result => { 
        setThisList(result.items)
        const Title=playlistTitle
        const description=playlistDescription
        setDisplay(
          <PlaylistOverview
            playlistID={playlistID}
            deletePlaylist={deletePlaylist}
            createNewPlaylist={createNewPlaylist}
            setDisplay={setDisplay}
            thisList={result.items}
            playlistTitle={Title}
            playlistDescription={description}
            creator={profileInfo.display_name}
            profileInfo={profileInfo}
            choosePlaylist={choosePlaylist}
            myPlaylists={myPlaylists}
            updatePlaylist={updatePlaylist}
            removeFromPlaylist={removeFromPlaylist}
          />
        )
      })
      .catch(error => console.log(error))
    }
    remove()
    window.alert('song removed')
  }

  return (
    <div id='App'>
      <NavigationBar 
        isLogged={isLogged}
        profileInfo={profileInfo}
      />
      <GreetingsPage />
      <LoginPage 
        ID={CLIENT_ID}
        setProfileInfo={setProfileInfo}
        setIsLogged={setIsLogged}
        token={token}
        setToken={setToken}
      />
     
      <Display 
        setPlaylistOverview = {setPlaylistOverview}
        isLogged={isLogged}
        state={state}
        searchInput={searchInput}
        display={display}
        setSearchInput={setSearchInput}
        setDisplay={setDisplay}
        albumList={albumList}
        trackList = {trackList}
        setThisHREF={setThisHREF}
        createNewPlaylist={createNewPlaylist}
        updatePlaylist={updatePlaylist}
        myPlaylists={myPlaylists}
        choosePlaylist={choosePlaylist}
        profileInfo={profileInfo}
      />
    </div>
  );
}; 

export default App;
