import movieDB from 'api/movieDB';
import React, { useEffect, useState } from 'react';

function Details({ movieId }) {
  const [movieData, setMovieData] = useState({});

  movieDB.getMovieDetails(movieId).then(resp => setMovieData(resp.data));

  return (
    <div className="movie-details-wrap">
      <img
        className="movie-details-pic"
        src={movieDB.POSTER_BASE_URL + movieData.poster_path}
        alt={movieData.tagline}
      />
      <div className="movie-details-info">
        <h1>{movieData.title}</h1>
        <p>User Score: {movieData.vote_average}</p>
        <h2>Overview</h2>
        <p>{movieData.overview}</p>
        {movieData.genres && <h2>Genres</h2>}
        <ul className="genres-list">
          {movieData.genres &&
            movieData.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Details;
