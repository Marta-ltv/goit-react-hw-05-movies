import { useEffect, useState } from 'react';
import apiDayMovies from 'components/api/api';
import {Link, useLocation } from 'react-router-dom';

const Home = () => {
    const [movies, setMovie] = useState([]);
    const location = useLocation();

    useEffect(() => {
        apiDayMovies.fetchTrendingMovies().then(({ results }) => {
        setMovie(results);
        });
    }, []);

    return (
        <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
           {title}
           </Link>
       </li>
        ))}
      </ul>
    </main>
    );
};

 export default Home;