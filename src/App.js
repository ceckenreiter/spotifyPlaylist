import './css/App.css';
import MiniLibrary from './MiniLibrary.js'
import CurrentlyPlaying from './CurrentlyPlaying.js'
import ChangingBody from './ChangingBody';
import Browse from './Browse';
import React, {useState} from 'react';



function App() {
  const [NowPlaying, setNowPlaying] = useState(''); 
  const [display, setDisplay] = useState(<Browse />);
  const [searchInput, setSearchInput] = useState("");
  const [Artist, setArtist] = useState(''); 
  const [Album, setAlbum] = useState(''); 
  



  return (
    <div id='App'>
      <div className='left'>
        <MiniLibrary />
        <CurrentlyPlaying 
         NowPlaying={NowPlaying} 
         setNowPlaying={setNowPlaying}
         Album={Album}
         Artist={Artist}
         setAlbum={setAlbum}
         setArtist={setArtist}
      
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
        />
      </div>
      
    </div>
  );
}; 


export default App;
