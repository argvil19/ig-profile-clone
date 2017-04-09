import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { userProfile } from '../../../store/actions/profile'
import { userPosts } from '../../../store/actions/posts'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(userProfile(this.props.params.id))
    this.props.dispatch(userPosts(this.props.params.id))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.id !== this.props.params.id) {
      this.props.dispatch(userProfile(this.props.params.id))
      this.props.dispatch(userPosts(this.props.params.id))
    }
    
  }

  render() {
    return (<Profile profile={this.props.profile} posts={this.props.posts}/>)
  }
}


const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(ProfileContainer)
