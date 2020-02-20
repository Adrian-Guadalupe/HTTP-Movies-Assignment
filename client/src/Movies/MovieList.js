import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { getMovies } from '../redux/actions'

const MovieList = () => {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList
