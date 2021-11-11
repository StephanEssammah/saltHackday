import './MovieCard.scss';

const MovieCard = ({ movie}) => {

  console.log('reached movieCard', movie)

  return (
      <div className="box">
        <p>{movie}</p>
      </div>
  );
}

export default MovieCard;
