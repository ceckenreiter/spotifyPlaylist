import './App.css';
import './style.css'; 
import MiniLibrary from './MiniLibrary.js'
import CurrentlyPlaying from './CurrentlyPlaying.js'
import SearchBar from './SearchBar.js'
import Browse from './Browse';


function App() {
  return (
    <div id='App'>
      <div className='left'>
        <MiniLibrary />
        <CurrentlyPlaying />
      </div>
      <div className='right'>
        <SearchBar />
        <Browse />
      </div>
    </div>
  );
}; 

export default App;
