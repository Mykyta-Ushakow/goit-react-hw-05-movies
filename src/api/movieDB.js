import axios from 'axios';

const HEADER = new Headers({
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
});
const API_KEY = '895c61bdfc9f5343dbaf9f098b803205';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w400';

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
  const API_KEY = 'ba5bcc67972e357b939718a8ae792a34';

  const READ_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTViY2M2Nzk3MmUzNTdiOTM5NzE4YThhZTc5MmEzNCIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPHj6OaU0BrsomrkwryTdS1cjcHudho8uvc6soYTGJ0';
}

async function getMovieReviews(movie_id) {
  const API_KEY = 'ba5bcc67972e357b939718a8ae792a34';

  const READ_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTViY2M2Nzk3MmUzNTdiOTM5NzE4YThhZTc5MmEzNCIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPHj6OaU0BrsomrkwryTdS1cjcHudho8uvc6soYTGJ0';
}

const movieDB = {
  POSTER_BASE_URL,
  getTrendingToday,
  searchThisMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
export default movieDB;
