import React from 'react';
import './App.css';
import EmojiSection from '../EmojiSection/EmojiSection';
import Search from '../Search/Search'

function App() {

  return (
    <div className="App">
      <Search />
      <EmojiSection />
    </div>
  );
}

export default App;