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
  const [title, setTitle] = useState(''); 

  const CLIENT_ID = '740dffe0e2cd4743995272820b7f8ec8';
  const CLIENT_SECRET = "16d3b53ef9804a7387b3fdbe6e11293f"



  return (
    <div id='App'>
      <LoginPage ID={CLIENT_ID}
        
      />
    <ProfileInformation 
     ID={CLIENT_ID}
     SECRET={CLIENT_SECRET}
        />
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
