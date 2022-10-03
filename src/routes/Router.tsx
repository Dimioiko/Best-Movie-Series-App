import { Routes, Route } from 'react-router-dom';
import MoviewNowPlaying from '../components/pages/movies/MoviesNowPlaying';
import PopularSeries from '../components/pages/series/PopularSeries';

export default function Router() {
  return (
    <Routes>
      <Route path="/MoviesNowPlaying" element={<MoviewNowPlaying />} />
      <Route path="PopularSeries" element={<PopularSeries />} />
    </Routes>
  );
}
