import { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';

import { SearchMovie } from '../../components/SearchMovie/SearchMovie';
import { searchMovie } from 'components/api/api';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovie(query).then(({ results }) => {
      setMovies(results);
    });
    return;
  }, [query]);

  const formSubmit = search => {
    setSearchParams({ query: search });
    setMovies([]);
  };

  return (
    <div>
      <SearchMovie onSubmit={formSubmit} />
      <ul>
        {movies.length > 0 &&
          movies.map(({ title, id }) => (
        <li key={title}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
          ))}
        <Suspense>
          <Outlet />
        </Suspense>
      </ul>
    </div>
  );
};
export default Movies;