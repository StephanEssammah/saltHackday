import './Search.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/movie/${input}`)
  }

  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} className="search-form__input" type='text' placeholder='SEARCH'/>
      </form>
  );
}

export default Search;
