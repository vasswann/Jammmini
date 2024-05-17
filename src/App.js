import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import styles from './App.module.css';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Playlist from './components/Playlist';

const CLIENT_ID = 'fcd271ef6c7b4a76885a01f87b5e983f';
const CLIENT_SECRET = '570cfeae3429453b865e68ceeea7c146';

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
  const [playlist, setPlaylist] = useState({ title: '', tracks: [] });
  const [accessToken, setAccessToken] = useState('');

  

  // useEffect(() => {
  //   const authParameters = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body:
  //       'grant_type=client_credentials&client_id=' +
  //       CLIENT_ID +
  //       '&client_secret=' +
  //       CLIENT_SECRET,
  //   };
  //   fetch('https://accounts.spotify.com/api/token', authParameters)
  //     .then((result) => result.json())
  //     .then((data) => setAccessToken(data))
  //     .catch((error) => {
  //       console.error('Error fetching access token:', error);
  //     });
  // });

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
 
  const handleSearch = async (searchTerm) => {
    // const options = {
    //   method: 'GET',
    //   url: 'https://api.spotify.com/v1/search',
    //   params: {
    //     q: {searchTerm},
    //     type: 'album',
    //     offset: '5',
    //     limit: '10',
    //     numberOfTopResults: '5'
    //   },
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + accessToken 
    //   }
    // };
    
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    

      const filteredTracks = dummyData.filter((track) =>
        track.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredTracks);
    
  };

  const savePlaylist = (title, tracks) => {
    setPlaylist({ title, tracks });
    // Here you could also make an API call to save the playlist to Spotify
    setSelectedTracks([]);
    console.log('Playlist saved:', { title, tracks });
    console.log(playlist);
  };

  return (
    <div className={styles.App}>
      {!accessToken ? (
        <>
          <div className={styles.header}>
            <h1>
              Ja<span className={styles.header_spam}>mmm</span>ini
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
              savePlaylist={savePlaylist}
            />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
