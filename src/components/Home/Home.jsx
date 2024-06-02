import React, { useState } from 'react';
import Movie from '../Movie/Movie';
import { useSelector } from 'react-redux';

const Home = () => {
  const { moviesData } = useSelector((state) => state.movies);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredMovies = moviesData.filter((movie) =>
    movie.original_title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className='my-5'>
      <input
        type="text"
        className='form-control mb-3'
        onChange={handleInputChange}
        placeholder='Find your favorite movie'
      />
      <Movie filteredMovies={filteredMovies} />
    </div>
  );
};

export default Home;
