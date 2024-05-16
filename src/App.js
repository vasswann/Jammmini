import React, { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Playlist from './components/Playlist';

function App() {
  const dummyData = [
    {
      id: '1',
      name: 'Sunset Boulevard',
      artist: 'David Bowie',
      album: 'Blackstar',
    },
    {
      id: '2',
      name: 'Dreams',
      artist: 'Fleetwood Mac',
      album: 'Rumours',
    },
    {
      id: '3',
      name: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
    },
    {
      id: '4',
      name: 'Hotel California',
      artist: 'Eagles',
      album: 'Hotel California',
    },
    {
      id: '5',
      name: 'Like a Rolling Stone',
      artist: 'Bob Dylan',
      album: 'Highway 61 Revisited',
    },
  ];

  const [filteredData, setFilteredData] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

  const addToPlaylist = (track) => {
    if (!selectedTracks.some((t) => t.id === track.id)) {
      setSelectedTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  const removeFromPlaylist = (trackToRemove) => {
    setSelectedTracks((prevTracks) =>
      prevTracks.filter((track) => track.id !== trackToRemove.id)
    );
  };

  const handleSearch = (searchTerm) => {
    const filteredTracks = dummyData.filter((track) =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredTracks);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <h1>
          Ja<spam className={styles.header_spam}>mmm</spam>ini
        </h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.trackListContainer}>
        <TrackList
          tracks={filteredData}
          className={styles.trackList}
          addToPlaylist={addToPlaylist}
        />
        <Playlist
          selectedTracks={selectedTracks}
          removeFromPlaylist={removeFromPlaylist}
        />
      </div>
    </div>
  );
}

export default App;
