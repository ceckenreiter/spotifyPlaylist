import './css/App.css';
import React, {useState} from 'react';
import LoginPage from './Components/LoginPage'
import ProfileInformation from './Components/ProfileInformation'
import GreetingsPage from './Components/GreetingsPage';
import NavigationBar from './Components/NavigationBar';
import Display from './Components/Display';



function App() {

  const [searchInput, setSearchInput] = useState(""); // for search field
  const [display, setDisplay] = useState(''); // changes display of changing body
  const [profileInfo, setProfileInfo] = useState([]) // saves profile info of user
  const [searchResults, setSearchResults] = useState('');  //saves the returned results of search
  const [albumList, setAlbumList] = useState([]) // for artistOverview
  const [trackList, setTrackList] = useState([]) // for ArtistOverview
  const [creatingPlaylist, setCreatingPlaylist] = useState([]); // for creating list we want to export
  const [isLogged, setIsLogged] = useState(false) // for testing if logged on
  const [username, setUsername] = useState('')
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [playlistDescription, setPlaylistDescription] = useState('')
  const [thisList, setThisList] = useState([])

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
        creatingPlaylist={creatingPlaylist}
        setCreatingPlaylist={setCreatingPlaylist}
        thisList={thisList}
        setThisList={setThisList}
        
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
