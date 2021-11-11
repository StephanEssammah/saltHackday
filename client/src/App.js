import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Movies from './components/Movies';
import { Routes, Route } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Movies />
          <Navbar />
        </>
      } />

      <Route path="/movies" element={
        <>
          <Header />
          <Navbar />
        </>
      } />
      <Route path="/movie/:title" element={
        <>
          <Header />
          <MovieInfo />
        </>
      } />
      <Route path="/search" element={
        <>
          <Header />
          <Search />
          <Navbar />
        </>
      } />

    </Routes>
  );
}

export default App;
