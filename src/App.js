import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar/searchBar';
import Time from './components/Time';
import Quotes from './components/Quotes';
import QuotesService from './services/quotes';

function App() {
  const [quotes, setQuotes] = useState('');
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://picsum.photos/1080')";
    if (quotes === '') {
      QuotesService().then(data => {
        console.log(data);
        setQuotes(data)
      }).catch(err => console.log(err));
    }
  })
  return (
    <div className="App">
      <Time />
      <SearchBar />
      <Quotes quote={quotes.content} author={quotes.author} />
    </div>
  );
}

export default App;
