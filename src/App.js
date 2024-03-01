import './App.css';
import MiniLibrary from './MiniLibrary.js'
import CurrentlyPlaying from './CurrentlyPlaying.js'
import SearchBar from './SearchBar.js'
import Browse from './Browse';
import SearchResults from './SearchResults';
import ArtistOverview from './ArtistOverview';
import ArtistAlbumView from './ArtistAlbumView';
import ArtistSongView from './ArtistSongView';
import TrackListView from './TrackListView';


function App() {
  return (
    <div>
      <MiniLibrary />
      <CurrentlyPlaying />
      <SearchBar />
      <Browse />
      <SearchResults />
      <ArtistOverview />
      <ArtistAlbumView />
      <ArtistSongView />
      <TrackListView />
    </div>
  );
}; 

export default App;
