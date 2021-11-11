import './MovieCard.scss';

const MovieCard = () => {

  const fetcher = async () => {
    const movie = await fetch('http://localhost:3001/movies')
    const parsedMovie = await movie.json()
    console.log(parsedMovie);
  }

  fetcher();

  return (
      <div className="box">
        <h1>hello</h1>
      </div>
  );
}

export default MovieCard;
