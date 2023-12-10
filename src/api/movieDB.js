import axios from 'axios';

const HEADER = new Headers({
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
});
const API_KEY = '895c61bdfc9f5343dbaf9f098b803205';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w400';
const PORTRAIT_BASE_URL = 'https://image.tmdb.org/t/p/w200';

async function getTrendingToday() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
    },
  };

  const results = await axios.request(options);

  return results;
}

async function searchThisMovie(query) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
    },
  };

  const results = axios.request(options);
  return results;
}

async function getMovieDetails(movie_id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}`,
    params: { language: 'en-US', movie_id },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
    },
  };

  const results = axios.request(options);
  return results;
}

async function getMovieCredits(movie_id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
    },
  };

  const results = axios.request(options);
  return results;
}

async function getMovieReviews(movie_id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
    },
  };

  const results = axios.request(options);
  return results;
}

const movieDB = {
  POSTER_BASE_URL,
  PORTRAIT_BASE_URL,
  getTrendingToday,
  searchThisMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
export default movieDB;
