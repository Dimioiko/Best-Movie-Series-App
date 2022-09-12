import React from 'react';
import { useFetch } from '../hooks/useFetch';

interface MoviesNowPlaying {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function MoviewNowPlaying() {
  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
  );
  console.log('movies now playing', data);

  return <div>test</div>;
}
