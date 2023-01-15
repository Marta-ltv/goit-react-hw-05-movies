const API_KEY = '963fd2e4c19fe891a746da17d3ea5ed3';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return await response.json();
  }
const apiDayMovies = { fetchTrendingMovies };
export default apiDayMovies;

export const searchMovie = async search => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`
  );
  return await response.json();
};
   
export const fetchMovie = async movieId => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return await response.json();
};

export const castMovie = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return await response.json();
};

export const reviewsMovie = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return await response.json();
};





