import methods from '../../utils/ig-api'

export const USER_POSTS_START = 'USER_POSTS_START'
export const USER_POSTS_DONE = 'USER_POSTS_DONE'
export const USER_POSTS_ERROR = 'USER_POSTS_ERROR'

const userPostsStart = () => {
  return {
    type: USER_POSTS_START
  }
}

const userPostsDone = payload => {
  return {
    payload,
    type: USER_POSTS_DONE
  }
}

const userPostsError = error => {
  return {
    type: USER_POSTS_ERROR,
    payload: error
  }
}

export const userPosts = id => {
  return function(dispatch, getState) {
    dispatch(userPostsStart())
    methods.getRecentMedia(id, (err, profile) => {
      if (err) {
        return dispatch(userPostsError(profile.meta))
      }
      return dispatch(userPostsDone(profile.data))
    })
  }
}
