import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../Store/moviesSlice';
import { Link } from 'react-router-dom';

const Movie = ({ filteredMovies }) => {
  const dispatch = useDispatch();
  const { moviesData , isLoading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const moviesToDisplay = filteredMovies.length > 0 ? filteredMovies : moviesData;

  return (
    <div className='row g-4'>
      {isLoading ? 
      <div className="text-center">
        <i className="fas fa-spin fa-spinner px-3 fs-1 py-5"></i>
      </div>
      :
      <>
      {moviesToDisplay?.map((movie) => (
        <div key={movie.id} className='col-lg-3 col-md-4 col-sm-6 col-xxl-2'>
          <Link to={'/movieDetails/' + movie.id} className='text-decoration-none text-white'>
            <div className="movie text-center py-3 rounded">
              <div className="movieImg overflow-hidden">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  className='w-100 rounded movieImg'
                  alt={movie.title}
                />
              </div>
              <div className="movieDetails py-2 flex-column align-items-center justify-content-center">
                <h3 className='h5 fw-bold'>
                  {movie.title.split(" ").slice(0, 2).join(" ") + "..."}
                </h3>
                <span><i className=" fas fa-star rating-color me-1"></i> { movie.vote_average}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
      </>
      }
    </div>
  );
};

export default Movie;
