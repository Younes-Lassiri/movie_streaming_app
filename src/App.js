import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Movie/>
    </div>
  );
}
export default App;
