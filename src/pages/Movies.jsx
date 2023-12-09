import movieDB from 'api/movieDB';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/Movies/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';

function Movies() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleQuery = input => {
    setQuery(input);
  };

  useEffect(() => {
    if (query) {
      movieDB
        .searchThisMovie(query)
        .then(resp => setSearchResults(resp.data.results));
    }
  }, [query]);

  return (
    <div>
      <SearchForm handleQuery={handleQuery} />
      <MovieList data={searchResults.length && searchResults} />
    </div>
  );
}

export default Movies;
