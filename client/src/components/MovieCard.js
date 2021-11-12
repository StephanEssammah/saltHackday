import '../styles/MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  const {title, poster} = movie


  return (
      <Link 
        to={`/movie/${title}`}
        className="movieCard">
        <img className="movieCard__poster" src={poster} />
      </Link>
  );
}

export default MovieCard;
