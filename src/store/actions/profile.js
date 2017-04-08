import methods from '../../utils/ig-api'

export const USER_PROFILE_START = 'USER_PROFILE_START'
export const USER_PROFILE_DONE = 'USER_PROFILE_DONE'
export const USER_PROFILE_ERROR = 'USER_PROFILE_ERROR'

const userProfileStart = () => {
  return {
    type: USER_PROFILE_START
  }
}

const userProfileDone = payload => {
  return {
    payload,
    type: USER_PROFILE_DONE
  }
}

const userProfileError = error => {
  return {
    type: USER_PROFILE_ERROR,
    payload: error
  }
}

export const userProfile = id => {
  return function(dispatch, getState) {
    dispatch(userProfileStart())
    methods.getProfile(id, (err, profile) => {
      if (err) {
        return dispatch(userProfileError(profile.meta))
      }
      return dispatch(userProfileDone(profile.data))
    })
  }
}
