import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GET_MOVIES, ADD_TO_SAVED_LIST, SET_ERROR } from './actions'

const initialState = {
   movies: [],
   savedList: [],
   error: ''
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_MOVIES:
         return {
            ...state,
            movies: action.payload
         }
      case SET_ERROR:
         return {
            ...state,
            error: action.payload
         }
      case ADD_TO_SAVED_LIST:
         return {
            ...state,
            savedList: [
               ...state.savedList,
               action.payload
            ]
         }
      default: return state
   }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store