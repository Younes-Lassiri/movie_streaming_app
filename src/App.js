import React, { useState, useEffect } from 'react';
import Choice from './components/choice';
import Landing from './components/Landing';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import Playlist from './components/playlist';
import Trending from './components/Trending';
function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Movie/>
      <Trending/>
      <div className='rest-design-fixed-attach'>
        <Choice/>
        <Playlist/>
      </div>
    </div>
  );
}
export default App;
