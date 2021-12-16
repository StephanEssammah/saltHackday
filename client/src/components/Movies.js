import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';
import '../styles/Movies.scss';

const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/'

const Movies = ( { movies, setMovies, user } ) => {
  const location = useLocation().pathname

  const fetchPopular = async () => {
    const movie = await fetch(`${URL}movies`)
    const parsedMovies = await movie.json()
    setMovies(parsedMovies)
  }

  const fetchFavourites = async () => {
    const movies = await fetch(`${URL}favourites/${user}`)
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
        return <MovieCard key={movie.title} movie={movie} />
      })}
    </article>
  );
}

export default Movies;
