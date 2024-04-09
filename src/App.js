import './css/App.css';
import Tracklist from './Tracklist.js'
import CurrentlyPlaying from './CurrentlyPlaying.js'
import ChangingBody from './ChangingBody';
import Browse from './Browse';
import React, {useState} from 'react';
import LoginPage from './LoginPage'
import ProfileInformation from './ProfileInformation'



function App() {

  const [NowPlaying, setNowPlaying] = useState(''); 
  const [display, setDisplay] = useState(<Browse />);
  const [searchInput, setSearchInput] = useState("");
  const [Artist, setArtist] = useState(''); 
  const [Album, setAlbum] = useState(''); 
  const [thisPlaylist, setThisPlaylist] = useState([]); 
  const [token, setToken] = useState("")
  const [title, setTitle] = useState(''); 
  



  return (
    <div id='App'>
      <LoginPage 
        token={token}
        setToken={setToken}
      />
    <ProfileInformation />
      <div className='SpecificContent'>
        <div className='left'>
        <CurrentlyPlaying 
          NowPlaying={NowPlaying} 
          setNowPlaying={setNowPlaying}
          Album={Album}
          Artist={Artist}
          setAlbum={setAlbum}
          setArtist={setArtist}
          thisPlaylist={thisPlaylist}
          setThisPlaylist={setThisPlaylist}
        
            />
          <Tracklist 
          searchInput={searchInput}
          display={display}
          NowPlaying={NowPlaying} 
          setNowPlaying={setNowPlaying} 
          setSearchInput={setSearchInput}
          setDisplay={setDisplay}
          Artist={Artist}
          setArtist={setArtist}  
          Album = {Album}   
          setAlbum ={ setAlbum}
          title={title}
          setTitle={setTitle}
          thisPlaylist={thisPlaylist}
          setThisPlaylist={setThisPlaylist}
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
            Artist={Artist}
            setArtist={setArtist}  
            Album = {Album}   
            setAlbum ={ setAlbum}
            thisPlaylist={thisPlaylist}
            setThisPlaylist={setThisPlaylist}
          />
        </div>
      </div>
    </div>
  );
}; 


export default App;
