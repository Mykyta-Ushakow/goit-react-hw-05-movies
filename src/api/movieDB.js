import { axios } from 'axios';

const HEADER = new Headers({
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTViY2M2Nzk3MmUzNTdiOTM5NzE4YThhZTc5MmEzNCIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPHj6OaU0BrsomrkwryTdS1cjcHudho8uvc6soYTGJ0',
});

async function getTrendingToday() {
  const API_KEY = 'ba5bcc67972e357b939718a8ae792a34';

  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

  const PARAMS = new URLSearchParams({
    API_KEY,
    append_to_response: 'images',
  });
}

async function searchMovies() {
  const API_KEY = 'ba5bcc67972e357b939718a8ae792a34';

  const READ_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTViY2M2Nzk3MmUzNTdiOTM5NzE4YThhZTc5MmEzNCIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPHj6OaU0BrsomrkwryTdS1cjcHudho8uvc6soYTGJ0';
}

async function getMovieDetails() {
  const API_KEY = 'ba5bcc67972e357b939718a8ae792a34';

  const READ_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTViY2M2Nzk3MmUzNTdiOTM5NzE4YThhZTc5MmEzNCIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPHj6OaU0BrsomrkwryTdS1cjcHudho8uvc6soYTGJ0';
}

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
