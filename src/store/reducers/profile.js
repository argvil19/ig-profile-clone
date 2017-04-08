import {
  USER_PROFILE_START,
  USER_PROFILE_DONE,
  USER_PROFILE_ERROR
} from '../actions/profile'

const initialState = {
  profile: null,
  fetching: false,
  fetched: false,
  error: null
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_START: 
      return {
        ...state,
        fetching: true
      }
      break
    case USER_PROFILE_DONE:
      return {
        ...state,
        fetching: false,
        fetched: true,
        profile: action.payload
      }
      break
    case USER_PROFILE_ERROR:
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

export default profileReducer
