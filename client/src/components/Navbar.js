import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="home" className="navbar__link">HOME</a>
      <a href="search" className="navbar__link">SEARCH</a>
      <a chref="favorites" className="navbar__link">FAVORITES</a>
    </nav>
  );
}

export default Navbar;
