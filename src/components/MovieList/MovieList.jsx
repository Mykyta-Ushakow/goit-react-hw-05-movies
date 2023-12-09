import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ data }) {
  return data ? (
    <ul className="movie-list">
      {data.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>Not results</p>
  );
}

export default MovieList;
