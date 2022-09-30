import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MoviewNowPlaying from './components/pages/movies/MoviesNowPlaying';
import PopularSeries from './components/pages/series/PopularSeries';
import { Routes, Route } from 'react-router-dom';

function App() {
  // https://api.themoviedb.org/3/movie/550?api_key=bce37414a95aed7c096dbb318f4b1fe1
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<MoviewNowPlaying />} />
        <Route path="PopularSeries" element={<PopularSeries />} />
      </Routes>
    </div>
  );
}

export default App;
