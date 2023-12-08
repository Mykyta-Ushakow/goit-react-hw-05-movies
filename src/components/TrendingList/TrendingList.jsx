import movieDB from 'api/movieDB';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TrendingList() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await movieDB.getTrendingToday();
        setTrending(result.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="trending-list">
      {trending.map(item => (
        <li key={item.id}>
          <Link to={`movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TrendingList;
