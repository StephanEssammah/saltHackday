import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = ( {setMovies} ) => {
  return (
    <nav className="navbar">
      <Link onClick={() => setMovies([])} to="/" className="navbar__link">HOME</Link>
      <Link to="/search" className="navbar__link">SEARCH</Link>
      <Link onClick={() => setMovies([])} to="/favourites" className="navbar__link">FAVOURITES</Link>
    </nav>
  );
}

export default Navbar;
