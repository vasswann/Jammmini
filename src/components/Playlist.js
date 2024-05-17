import React, { useState, useEffect } from 'react';
import Button from './Button';
import styles from './Playlist.module.css';
import Track from './Track';

const Playlist = ({ selectedTracks, removeFromPlaylist, savePlaylist }) => {
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [error, setError] = useState('');

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setPlaylistTitle(title);
    if (title.length < 3) {
      setError('Playlist title must be at least 3 characters long');
      setTimeout(() => {
        setError('');
      }, 5000);
    } else {
      setError('');
    }
  };

  const handleSave = () => {
    if (playlistTitle.length < 3) {
      setError('Playlist title must be at least 3 characters long.');
      setTimeout(() => {
        setError('');
      }, 5000);
    } else {
      savePlaylist(playlistTitle, selectedTracks);
      setPlaylistTitle('');
      setError('');
    }
  };

  useEffect(() => {
    if (selectedTracks.length === 0) {
      setPlaylistTitle('');
    }
  }, [selectedTracks]);

  return (
    <div className={styles.playlistContainer}>
      <h2>Playlist</h2>
      <input
        type='text'
        placeholder='Enter playlist title'
        value={playlistTitle}
        onChange={handleTitleChange}
        className={styles.playlistTitleInput}
      />
      {error && <p className={styles.error}>{error}</p>}
      {selectedTracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          isRemovable={true}
          removeFromPlaylist={removeFromPlaylist}
        />
      ))}
      <Button onClick={handleSave}>SAVE TO SPOTIFY</Button>
    </div>
  );
};

export default Playlist;
