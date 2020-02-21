import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { saveMovie } from '../redux/actions'
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";

const Movie = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies)
  const movieToEdit = useSelector(state => state.movieToEdit)
  
  return (
    <div className="save-wrapper">
      <MovieCard movie={movieToEdit}/>
      <div className="save-button" onClick={() => dispatch(saveMovie())}>
        Save
      </div>
      <Link className='update-button' to={`/update-movie/${movies.filter(movie => movie === movie.id) }`}>Update</Link>
      
      <div className="delete-button" onClick={dispatch(saveMovie())}>
        Delete
      </div>
    </div>
  );
}

export default Movie
