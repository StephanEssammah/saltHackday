import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';
import '../styles/Movies.scss';

const Movies = ( { movies, setMovies, user } ) => {
  const location = useLocation().pathname
  console.log('HELLO', location)


  const fetchPopular = async () => {
    const movie = await fetch('http://localhost:3001/movies')
    const parsedMovies = await movie.json()
    setMovies(parsedMovies)
  }

  const fetchFavourites = async () => {
    console.log('fetching favs')
    const movies = await fetch(`http://localhost:3001/favourites/${user}`)
    const parsedMovies = await movies.json()
    setMovies(parsedMovies)
  }

if (movies.length === 0) {
  if (location === '/') fetchPopular()
  if (location === '/favourites') fetchFavourites()
}

  
  return (
    <article className="box-container">
      {movies.length > 0 && movies.map(movie => {
        return <MovieCard movie={movie} />
      })}
    </article>
  );
}

export default Movies;
