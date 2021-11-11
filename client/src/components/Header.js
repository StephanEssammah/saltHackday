import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to='/' className="header__logo">STEFLIX</Link>
      <Link to='/' className="header__profile">PROFILE</Link>
    </header>
  );
}

export default Header;
