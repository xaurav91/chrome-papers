import React, { useEffect } from 'react';
import SearchBar from './components/searchBar/searchBar';
import Time from './components/Time';

function App() {

  useEffect(() => {
    document.body.style.backgroundImage = "url('https://picsum.photos/1080')";
  })
  return (
    <div className="App">
      <Time />
      <SearchBar />
    </div>
  );
}

export default App;
