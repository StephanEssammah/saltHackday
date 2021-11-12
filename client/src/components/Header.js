import '../styles/Header.scss'
import { Link } from 'react-router-dom';

const Header = ( {setMovies}) => {
  return (
    <header className="header">
      <Link onClick={() => setMovies([])} to='/' className="header__logo">STEFLIX</Link>
      <Link to='/user' className="header__profile">PROFILE</Link>
    </header>
  );
}

export default Header;
