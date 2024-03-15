import './App.css';
import MiniLibrary from './MiniLibrary.js'
import CurrentlyPlaying from './CurrentlyPlaying.js'
import ChangingBody from './ChangingBody';



function App() {
  return (
    <div id='App'>
      <div className='left'>
        <MiniLibrary />
        <CurrentlyPlaying />
      </div>
      <div className='right'>
        <ChangingBody />
      </div>
    </div>
  );
}; 


export default App;
