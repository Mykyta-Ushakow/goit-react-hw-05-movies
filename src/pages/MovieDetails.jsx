import Details from 'components/Movies/Details/Details';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  return (
    <div>
      <button type="button">Go back</button>
      <Details movieId={movieId} />
      <Outlet />
    </div>
  );
}

export default MovieDetails;
