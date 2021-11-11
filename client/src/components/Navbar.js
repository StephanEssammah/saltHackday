import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">HOME</Link>
      <Link to="/search" className="navbar__link">SEARCH</Link>
      <Link to="/favorites" className="navbar__link">FAVORITES</Link>
    </nav>
  );
}

export default Navbar;
