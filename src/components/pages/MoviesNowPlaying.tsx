import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, Typography } from '@mui/material';

type MoviesNowPlaying = {
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
};

type MoviesNowPlayingData = {
  page: number;
  results: MoviesNowPlaying[];
  total_pages: number;
  total_results: number;
};

export default function MoviewNowPlaying() {
  const { data } = useFetch<MoviesNowPlayingData>(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
  );
  console.log('movies now playing', data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ padding: 1, backgroundColor: 'lightgrey' }}>
        {data?.results.map((movie) => (
          <Grid key={movie.id} item xs={2}>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}?`}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={movie?.title}
              style={{ height: 400 }}
              loading="lazy"
            />
            <Typography>Test</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
    // <Grid container spacing={2}>
    //   {data?.results.map((movie) => (
    //               <Grid item xs={8}>
    //               <img
    //                 src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}?`}
    //                 // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    //                 alt={movie?.title}
    //                 loading="lazy"
    //                 />
    //                 <Grid/>
    //   ))}
    // </Grid>
  );
}
