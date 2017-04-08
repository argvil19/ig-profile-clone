import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { connect } from 'react-redux'
import Search from '../components/Search'
import methods from '../utils/ig-api'
import { userSearch } from '../store/actions/searcher'

class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchUser(query) {
    this.props.dispatch(userSearch(query))
  } 

  render () {
    return (
      <Search userList={this.props.users} showSpin={this.props.showSpin} onChange={this.handleSearchUser.bind(this)} />
    )  
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userSearch.users,
    showSpin: state.userSearch.fetching
  }
}

export default connect(mapStateToProps)(SearchContainer);
