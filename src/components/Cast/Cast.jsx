import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Img } from './Cast.styled';
import { castMovie } from 'components/api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    castMovie(movieId).then(({ cast }) => {
      setMovie(cast);
    });
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <ul>
      {movie.map(({ name, profile_path, character }) => {
        return (
          <li key={name}>
      <Img
        src={
          profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        }
        alt=""
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
        );
      })}
    </ul>
  );
};
export default Cast;