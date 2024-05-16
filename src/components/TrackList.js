import React from 'react';
import Track from './Track';
import styles from './TrackList.module.css';

const TrackList = ({ tracks, addToPlaylist }) => {
  return (
    <div className={styles.trackListContainer}>
      {tracks.map((track) => (
        <Track key={track.id} track={track} addToPlaylist={addToPlaylist} />
      ))}
    </div>
  );
};

export default TrackList;
