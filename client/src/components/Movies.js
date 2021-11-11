import MovieCard from './MovieCard';
import './Movies.scss';
import { useState } from 'react';

const Movies = () => {
  const [movies, setMovies ]= useState([])

  const fetcher = async () => {
    console.log('reached fetcher')
    const movie = await fetch('http://localhost:3001/movies')
    const parsedMovies = await movie.json()
    console.log(parsedMovies)
    setMovies(parsedMovies)
  }
  

  if (movies.length === 0) fetcher();

  return (
    <article className="box-container">
      {movies.length > 0 && movies.map(movie => {
        return <MovieCard movie={movie} />
      })}
    </article>
  );
}

export default Movies;
