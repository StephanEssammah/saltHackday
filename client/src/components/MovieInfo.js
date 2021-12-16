import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/MovieInfo.scss'
import { titleRegex } from './Utils';
const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/'

const MovieInfo = ({ user }) => {
  const [movie, setMovie ]= useState([])
  const [button, setButton ] = useState('ADD TO FAVOURITES')

  const movieTitle = titleRegex(useLocation()).replace(':', '')
  
  const fetcher = async () => {
    console.log('movie title', movieTitle)
    const movie = await fetch(`${URL}${movieTitle}`)
    const parsedMovie = await movie.json()
    setMovie(parsedMovie)
  }

  const setFavourite = async () => {
    await fetch(`${URL}favourites/${movieTitle}`, 
    {
      method: 'PUT',  
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: user})
    })
    setButton('ADDED!')
  }
  
  if (movie.length === 0) fetcher();

  return (
      <div className="movie-info">
        <img className="movie-info__poster" src={movie.poster} alt="poster not found"/>
        
        <h2 className="movie-info__title">{movie.title}</h2>
        <div className="movie-info__stats">
          <p>{movie.rating} / 10 ⭐</p>
          <p>{movie.length}</p>
          <p>{movie.year}</p>
        </div>
        <p className="movie-info__description">{movie.description}</p>
        <button className="movie-info__button" onClick={setFavourite}>{button}</button>
      </div>
  );
}

export default MovieInfo;
