import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import apiWeekMovies from 'components/api/requests';
import { HomeItem } from './HomeItem/HomeItem';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiWeekMovies.fetchDataWeek().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <main>
      <h1>Trends of the week</h1>
      <ul>
        {movies.map(({ title, id }) => (
          <HomeItem title={title} id={id} key={id} />
        ))}
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Home;