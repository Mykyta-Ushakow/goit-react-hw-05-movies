import React from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  return <div>Reviews</div>;
}

export default Reviews;
