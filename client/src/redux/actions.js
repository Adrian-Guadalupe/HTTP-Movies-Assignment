import axios from 'axios'

export const GET_MOVIES = 'GET_MOVIES'
export const SET_ERROR = 'SET_ERROR'
export const ADD_TO_SAVED_LIST = 'ADD_TO_SAVED_LIST'
export const SET_MOVIE_TO_EDIT = 'SET_MOVIE_TO_EDIT'

export const getMovies = () => dispatch => {
   axios
      .get('http://localhost:5000/api/movies/')
      .then(res => {
         console.log(res.data)
         dispatch({ type: GET_MOVIES, payload: res.data})
      })
      .catch(err => {
         console.log('error', err.response)
         dispatch({ type: SET_ERROR, payload: 'error fetching movies' })
      })
}

export const saveMovie = movie => dispatch => {
   dispatch({ type: ADD_TO_SAVED_LIST, payload: movie })
}

export const setMovieToEdit = movie => dispatch => {
   dispatch({ type: SET_MOVIE_TO_EDIT, payload: movie })
}