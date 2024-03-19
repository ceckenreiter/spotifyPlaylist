import './css/App.css';
import MiniLibrary from './MiniLibrary.js'
import CurrentlyPlaying from './CurrentlyPlaying.js'
import ChangingBody from './ChangingBody';
import Browse from './Browse';
import React, {useState} from 'react';



function App() {
  const [NowPlaying, setNowPlaying] = useState("Blank"); 
  const [display, setDisplay] = useState(<Browse />);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div id='App'>
      <div className='left'>
        <MiniLibrary />
        <CurrentlyPlaying 
         NowPlaying={NowPlaying} 
         setNowPlaying={setNowPlaying} />
      </div>
      <div className='right'>
        <ChangingBody 
          searchInput={searchInput}
          display={display}
          NowPlaying={NowPlaying} 
          setNowPlaying={setNowPlaying} 
          setSearchInput={setSearchInput}
          setDisplay={setDisplay}
        />
      </div>
    </div>
  );
}; 


export default App;
