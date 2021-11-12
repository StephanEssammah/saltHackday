import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Movies from './components/Movies';
import { Routes, Route } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';
import { useState } from 'react'
import User from './components/User';

function App() {
  const [ movies, setMovies ]= useState([])
  const [ user, setUser ] = useState('stephan')

  return (
    <>
      <Header setMovies={setMovies}/>
      <Routes>
        <Route path="/" element={<Movies movies={movies} setMovies={setMovies} />} />
        <Route path="/favourites" element={<Movies movies={movies} setMovies={setMovies} user={user}/>} />
        <Route path="/movie/:title" element={<MovieInfo user={user}/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User setUser={setUser} setMovies={setMovies}/>} />
      </Routes>
      <Navbar setMovies={setMovies} />
    </>
  );
}

export default App;
