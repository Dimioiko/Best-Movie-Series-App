import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MoviewNowPlaying from './components/pages/MoviesNowPlaying';

function App() {
  // https://api.themoviedb.org/3/movie/550?api_key=bce37414a95aed7c096dbb318f4b1fe1
  return (
    <div className='App'>
      <NavBar />
      <MoviewNowPlaying />
    </div>
  );
}

export default App;
