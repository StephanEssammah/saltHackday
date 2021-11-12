import '../styles/MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  const {title, poster} = movie

  return (
      <Link 
        to={`/movie/${title}`}
        className="movieCard">
        <img className="movieCard__poster" src={poster} alt="poster not found"/>
      </Link>
  );
}

export default MovieCard;
