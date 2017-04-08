import methods from '../../utils/ig-api'

export const USER_SEARCH_START = 'USER_SEARCH_START'
export const USER_SEARCH_DONE = 'USER_SEARCH_DONE'
export const USER_SEARCH_ERROR = 'USER_SEARCH_ERROR'

const userSearchStart = () => {
  return {
    type: USER_SEARCH_START
  }
}

const userSearchDone = payload => {
  return {
    payload,
    type: USER_SEARCH_DONE
  }
}

const userSearchError = error => {
  return {
    type: USER_SEARCH_ERROR,
    payload: error
  }
}

export const userSearch = query => {
  return function(dispatch, getState) {
    dispatch(userSearchStart())
    methods.searchUsers(query, (err, users) => {
      if (err) {
        return dispatch(userSearchError(users.meta))
      }
      return dispatch(userSearchDone(users.data))
    })
  }
}
