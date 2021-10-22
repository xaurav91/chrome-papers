import React, { useState } from 'react';
import images from '../../config/images';

function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="search__bar">
      <div className="input__wrapper">
        <img src={images.searchIcon} alt="search icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Google or type a URL"
        />
      </div>
      <a
        className={`button ${query.length < 1 ? 'disabled' : ''}`}
        href={`https://www.google.com/search?q=${query}`}
      >
        Search
      </a>
    </div>
  );
}

export default SearchBar;
