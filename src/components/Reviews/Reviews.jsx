import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { reviewsMovie } from '../api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    reviewsMovie(movieId).then(({ results }) => {
      setMovie(results);
    });
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <ul>
      {movie.length > 0 ? (
        movie.map(({ author, content}) => (
    <li key={content}>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};
export default Reviews;