import {
  USER_POSTS_START,
  USER_POSTS_DONE,
  USER_POSTS_ERROR
} from '../actions/posts'

const initialState = {
  posts: null,
  fetching: false,
  fetched: false,
  error: null
}

const postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case USER_POSTS_START: 
      return {
        ...state,
        fetching: true
      }
      break
    case USER_POSTS_DONE:
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload
      }
      break
    case USER_POSTS_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      }
      break
    default:
      return {
        ...state
      }
  }
}

export default postsReducer
