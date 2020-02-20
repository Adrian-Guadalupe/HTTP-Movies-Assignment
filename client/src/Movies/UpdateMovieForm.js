import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateMovieForm = props => {
   const [movieToUpdate, setMovieToUpdate] = useState({
      id: Date.now(),
      title: '',
      director: '',
      metascore: '',
      stars: [],
   })

   useEffect(() => {
      const selectedMovie = props.movies.find(movie => {
        return `${movie.id}` === props.match.params.id;
      });
      console.log(selectedMovie);
      if (selectedMovie) {
        setMovieToUpdate(selectedMovie);
      }
    }, [props.movies, props.match.params.id]);

   const handleSubmit = e => {
     e.preventDefault();
     axios
       .put(`http://localhost:5000//api/movies/${movieToUpdate.id}`, movieToUpdate)
       .then(res => {
         props.updateItems(res.data);
       })
       .catch(err => {
         console.log(err);
       });
   };

   const changeHandler = ev => {
      ev.persist();
      setMovieToUpdate({
        ...movieToUpdate,
        [ev.target.name]: ev.target.value
      });
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               name='title'
               onChange={changeHandler}
               placeholder='Title'
               value={movieToUpdate.title}
            />
            <input
               type='text'
               name='director'
               onChange={changeHandler}
               placeholder='Director'
               value={movieToUpdate.director}
            />
            <input
               type='number'
               name='metascore'
               onChange={changeHandler}
               placeholder='Metascore'
               value={movieToUpdate.metascore}
            /> 
            <input 
               type='text'
               name='stars'
               onChange={changeHandler}
               placeholder='Stars'
               value={movieToUpdate.stars}
            /> 
         </form>
      </div>
   )
}

export default UpdateMovieForm
