import React, { useState, useCallback, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

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
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<MoviesNowPlaying[]>([]);

  const onSuccess = useCallback((res: MoviesNowPlayingData) => {
    setAllMovies((prev) => [...prev, ...res.results]);
  }, []);

  useEffect(() => {
    setAllMovies([]);
  }, []);

  const { data, loading } = useFetch<MoviesNowPlayingData>(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
    onSuccess
  );

  console.log('movies now playing', allMovies);

  const fetchMoreMovies = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'lightgray'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          my: 2
        }}>
        {allMovies?.map((movie) => (
          <Box key={movie.id} sx={{ border: 1, m: 1, boxShadow: 10 }}>
            <Box sx={{ padding: 0.5, width: 258 }}>
              <Typography>{movie.original_title}</Typography>
            </Box>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}?`}
              alt={movie?.title}
              style={{ height: 400 }}
              loading="lazy"
            />
            <Typography>Release Date: {movie.release_date}</Typography>
            <Stack spacing={0.5}>
              <Rating
                size="small"
                name="half-rating-read"
                defaultValue={movie?.vote_average}
                precision={0.5}
                readOnly
                max={10}
              />
            </Stack>
          </Box>
        ))}
      </Box>
      <Box sx={{ justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <Button variant="contained" onClick={fetchMoreMovies}>
          Load more movies
        </Button>
      </Box>
    </Box>
  );
}
