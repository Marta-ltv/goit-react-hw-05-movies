import { useState } from 'react';
import { Input } from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Search movies..."
        type="text"
        name="name"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};