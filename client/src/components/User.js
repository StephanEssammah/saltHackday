import '../styles/User.scss';
import { Link } from 'react-router-dom';

const User = ( { setUser, setMovies }) => {
  return (
    <div className="user">
      <div className="user__buttons">
        <Link onClick={() => {
          setUser('stephan')
          setMovies([])
        }} to="/" className="user__link">STEPHAN</Link>
        <Link onClick={() => {
          setUser('carl')
          setMovies([])
          }} to="/" className="user__link">CARL</Link>
      </div>
    </div>
  );
}

export default User;
