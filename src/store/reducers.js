import { combineReducers } from 'redux'
import locationReducer from './location'
import searcherReducer from './reducers/searcher'
import profileReducer from './reducers/profile'
import postsReducer from './reducers/posts'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    userSearch: searcherReducer,
    profile: profileReducer,
    posts: postsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
