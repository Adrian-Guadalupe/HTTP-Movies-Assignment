import axios from 'axios'

export const GET_MOVIES = 'GET_MOVIES'
export const SET_ERROR = 'SET_ERROR'

export const getMovies = () => dispatch => {
   axios
      .get('http://localhost:5000/api/movies')
      .then(res => {
         console.log(res.data)
         dispatch({ type: GET_MOVIES, payload: res.data})
      })
      .catch(err => {
         console.log('error', err.response)
         dispatch({ type: SET_ERROR, payload: 'error fetching movies' })
      })
}