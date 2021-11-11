import { Link , useLocation } from 'react-router-dom';
import { useState } from 'react';
import './MovieInfo.scss'

const MovieInfo = ( ) => {
  const [movie, setMovie ]= useState([])

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
  

  if (movie.length === 0) fetcher();

  return (
      <div className="movieInfo">
        <img src={movie.poster}/>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
  );
}

export default MovieInfo;
