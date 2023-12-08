import axios from 'axios';

const HEADER = new Headers({
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k',
});
const API_KEY = '895c61bdfc9f5343dbaf9f098b803205';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

async function getTrendingToday() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

  const PARAMS = new URLSearchParams({
    api_key: API_KEY,
  });

  const fullURL = `${BASE_URL}?${PARAMS}`;

  const results = await axios.get(fullURL, {
    header: HEADER,
  });

  return results;
}

async function searchThisMovie() {
  const API_KEY = 'ba5bcc67972e357b939718a8ae792a34';

  const READ_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTViY2M2Nzk3MmUzNTdiOTM5NzE4YThhZTc5MmEzNCIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPHj6OaU0BrsomrkwryTdS1cjcHudho8uvc6soYTGJ0';
}

async function getMovieDetails(movie_id) {}

async function getMovieCredits() {
  const API_KEY = 'ba5bcc67972e357b939718a8ae792a34';

  const READ_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTViY2M2Nzk3MmUzNTdiOTM5NzE4YThhZTc5MmEzNCIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPHj6OaU0BrsomrkwryTdS1cjcHudho8uvc6soYTGJ0';
}

async function getMovieReviews() {
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
