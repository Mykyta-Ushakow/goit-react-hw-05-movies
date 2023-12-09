import Details from 'components/Movies/Details/Details';
import React from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();

  return (
    <div>
      <Link to="/">
        <button type="button">Go back </button>
      </Link>
      <Details movieId={movieId} />
      <ul className="movie-detail-switcher">
        <NavLink to={`cast`}>Cast</NavLink>
        {' | '}
        <NavLink to={`reviews`}>Reviews</NavLink>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
