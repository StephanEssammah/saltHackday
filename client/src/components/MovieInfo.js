import { Link , useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/MovieInfo.scss'

const MovieInfo = ({ user }) => {
  const [movie, setMovie ]= useState([])
  const [button, setButton ] = useState('ADD TO FAVOURITES')

  const location = useLocation()

  const fullPath = location.pathname
  const removeMovie = /\/movie\//
  const cutPath = fullPath.replace(removeMovie, '')
  const cleanupTitle = /%20/g
  const cleanTitle = cutPath.replace(cleanupTitle, ' ')
  
  const fetcher = async () => {
    console.log('reached fetcher')
    const movie = await fetch(`http://localhost:3001/movie/${cleanTitle}`)
    const parsedMovie = await movie.json()
    console.log(parsedMovie)
    setMovie(parsedMovie)
  }

  const setFavourite = async () => {
    const movie = await fetch(`http://localhost:3001/favourites/${cleanTitle}`, 
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
        <img className="movie-info__poster" src={movie.poster}/>
        
        <h2 className="movie-info__title">{movie.title}</h2>
        <div className="movie-info__stats">
          <p>rating</p>
          <p>length</p>
          <p>year</p>
        </div>
        <p className="movie-info__description">{movie.description}</p>
        <button className="movie-info__button" onClick={setFavourite}>{button}</button>
      </div>
  );
}

export default MovieInfo;
