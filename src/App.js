import './css/App.css';
import Tracklist from './Components/Tracklist.js'
import CurrentlyPlaying from './Components/CurrentlyPlaying.js'
import ChangingBody from './Components/ChangingBody';
import Browse from './Components/Browse';
import React, {useState} from 'react';
import LoginPage from './Components/LoginPage'
import ProfileInformation from './Components/ProfileInformation'
import GreetingsPage from './Components/GreetingsPage';
import NavigationBar from './Components/NavigationBar';



function App() {

  const [searchInput, setSearchInput] = useState("");
  const [display, setDisplay] = useState('');
  const [profileInfo, setProfileInfo] = useState([])
  const [searchResults, setSearchResults] = useState(''); 
  const [albumList, setAlbumList] = useState([])
  const [trackList, setTrackList] = useState([])
  const [isLogged, setIsLogged] = useState(false)



  const [NowPlaying, setNowPlaying] = useState(''); 
  
  
  const [creatingPlaylist, setCreatingPlaylist] = useState([]); 
  

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

    <Browse setDisplay={setDisplay} />

      <div className='SpecificContent'>
        <div className='left'>
        <CurrentlyPlaying 
          NowPlaying={NowPlaying} 
          setNowPlaying={setNowPlaying}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          albumList={albumList}
          setAlbumList={setAlbumList}
          
         
        
            />
          <Tracklist 
          searchInput={searchInput}
          display={display}
          NowPlaying={NowPlaying} 
          setNowPlaying={setNowPlaying} 
          setSearchInput={setSearchInput}
          setDisplay={setDisplay}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          creatingPlaylist={creatingPlaylist}
          setCreatingPlaylist={setCreatingPlaylist}
          

         
        />        
        </div>
        <div className='right'>
          <ChangingBody 
            searchInput={searchInput}
            display={display}
            NowPlaying={NowPlaying} 
            setNowPlaying={setNowPlaying} 
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
          />
          
        </div>
      </div>
    </div>
  );
}; 


export default App;
