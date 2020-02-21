import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';

const SavedList = () => {
  const movies = useSelector(state => state.movies)
  
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {movies.map(movie => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default SavedList
