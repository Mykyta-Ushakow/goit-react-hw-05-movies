import React from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const { movieId } = useParams();
  return <div>Cast</div>;
}

export default Cast;
