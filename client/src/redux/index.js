import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      default: return state
   }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store