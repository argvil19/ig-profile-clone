import {
  USER_SEARCH_START,
  USER_SEARCH_DONE,
  USER_SEARCH_ERROR
} from '../actions/searcher'

const initialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null
}

const searcherReducer = (state=initialState, action) => {
  switch (action.type) {
    case USER_SEARCH_START: 
      return {
        ...state,
        fetching: true
      }
      break
    case USER_SEARCH_DONE:
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload ? action.payload : []
      }
      break
    case USER_SEARCH_ERROR:
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

export default searcherReducer
