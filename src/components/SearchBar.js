import React, { useState } from 'react';
import Button from './Button';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm.trim());
    setSearchTerm('');
  };

  return (
    <form className={styles['search-bar-container']} onSubmit={handleSubmit}>
      <input
        type='text'
        className={styles['search-bar']}
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search for music...'
      />
      <Button className={styles.button}>Search</Button>
    </form>
  );
};

export default SearchBar;
