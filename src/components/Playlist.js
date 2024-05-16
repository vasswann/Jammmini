import React from 'react';
import Button from './Button';
import styles from './Playlist.module.css';
import Track from './Track';

const Playlist = ({ selectedTracks, removeFromPlaylist }) => {
  return (
    <div className={styles.playlistContainer}>
      <h2>Selected Tracks</h2>
      {selectedTracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          isRemovable={true}
          removeFromPlaylist={removeFromPlaylist}
        />
      ))}
      <Button>SAVE TO SPOTIFY</Button>
    </div>
  );
};

export default Playlist;
