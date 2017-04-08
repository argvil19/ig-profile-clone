import Profile from './containers/ProfileContainer'

export default (store) => ({
	path: 'profile/:id',
	getComponent(nextState, cb) {
		cb(null, Profile)
	}
})
