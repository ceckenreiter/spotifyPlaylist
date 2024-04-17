import './css/App.css';
import Tracklist from './Components/Tracklist.js'
import ChangingBody from './Components/ChangingBody';
import Browse from './Components/Browse';
import React, {useState} from 'react';
import LoginPage from './Components/LoginPage'
import ProfileInformation from './Components/ProfileInformation'
import GreetingsPage from './Components/GreetingsPage';
import NavigationBar from './Components/NavigationBar';
import Playlists from './Components/Playlists';



function App() {

  const [searchInput, setSearchInput] = useState(""); // for search field
  const [display, setDisplay] = useState(''); // changes display of changing body
  const [profileInfo, setProfileInfo] = useState([]) // saves profile info of user
  const [searchResults, setSearchResults] = useState('');  //saves the returned results of search
  const [albumList, setAlbumList] = useState([]) // for artistOverview
  const [trackList, setTrackList] = useState([]) // for ArtistOverview
  const [creatingPlaylist, setCreatingPlaylist] = useState([]); // for creating list we want to export
  const [isLogged, setIsLogged] = useState(false) // for testing if logged on
  const [clickedSong, setClickedSong] = useState('') // adding songs to playlist

  const CLIENT_ID = '740dffe0e2cd4743995272820b7f8ec8';
  const CLIENT_SECRET = "16d3b53ef9804a7387b3fdbe6e11293f"



  return (
    <div id='App'>
      <NavigationBar 
      isLogged={isLogged}
      setIsLogged={setIsLogged}
      profileInfo={profileInfo}
      setProfileInfo={setProfileInfo}
      />

      <GreetingsPage />
      <LoginPage ID={CLIENT_ID}
      profileInfo={profileInfo}
      setProfileInfo={setProfileInfo}
      isLogged={isLogged}
      setIsLogged={setIsLogged}
        
      />
    <ProfileInformation 
     ID={CLIENT_ID}
     SECRET={CLIENT_SECRET}
     profileInfo={profileInfo}
     setProfileInfo={setProfileInfo}
        />


      <div className='SpecificContent'>
        <div className='left'>
          <Playlists 
            creatingPlaylist={creatingPlaylist}
            setCreatingPlaylist={setCreatingPlaylist}
            searchInput={searchInput}
            display={display}
            setSearchInput={setSearchInput}
            setDisplay={setDisplay}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            clickedSong={clickedSong}
            setClickedSong={setClickedSong}
            />
         
       
          <Tracklist 
          searchInput={searchInput}
          display={display}
          setSearchInput={setSearchInput}
          setDisplay={setDisplay}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          creatingPlaylist={creatingPlaylist}
          setCreatingPlaylist={setCreatingPlaylist}
          clickedSong={clickedSong}
          setClickedSong={setClickedSong}
           

         
        />        
        </div>
        <div className='right'>
          <ChangingBody 
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
            clickedSong={clickedSong}
            setClickedSong={setClickedSong}
          />
          <Browse 
          setDisplay={setDisplay}
          clickedSong={clickedSong}
          setClickedSong={setClickedSong}
          creatingPlaylist={creatingPlaylist}
          setCreatingPlaylist={setCreatingPlaylist}
           />
          
        </div>
      </div>
    </div>
  );
}; 


export default App;
