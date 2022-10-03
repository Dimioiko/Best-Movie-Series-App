import React from 'react';
import './App.css';
import NavBar from './components/shared/NavBar';
import Router from './routes/Router';

function App() {
  // https://api.themoviedb.org/3/movie/550?api_key=bce37414a95aed7c096dbb318f4b1fe1
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
