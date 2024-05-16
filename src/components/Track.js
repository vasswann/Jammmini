import React from 'react';
import styles from './Track.module.css';

const Track = ({ track, isRemovable, addToPlaylist, removeFromPlaylist }) => {
  const handleButtonClick = () => {
    if (isRemovable) {
      removeFromPlaylist(track);
    } else {
      addToPlaylist(track);
    }
  };

  return (
    <div className={styles.track}>
      <div className={styles.trackInfo}>
        <div className={styles.trackName}>{track.name}</div>
        <div className={styles.trackDetails}>
          {track.artist} - {track.album}
        </div>
      </div>
      <button className={styles.addButton} onClick={handleButtonClick}>
        {isRemovable ? '-' : '+'}
      </button>
    </div>
  );
};

export default Track;
