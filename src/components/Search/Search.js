import React from 'react'
import { IndexLink, browserHistory } from 'react-router'
import { findDOMNode } from 'react-dom'
import SearchList from '../SearchList'
import './Search.scss'

class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showList: false
    }
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  handleFocus(e) {
    this.setState({
      showList: true
    })
  }

  handleClickOutside(e) {
    this.setState({
      showList: false
    })
  }

  render() {
    return (
      <div className='input-header'>
        <input placeholder='Buscar' onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)}/>
        <span></span>
        {this.props.showSpin && <span className='loading'></span>}
        <SearchList users={this.props.userList} show={this.state.showList} onHide={this.handleClickOutside.bind(this)}/>
      </div> 
    )
  }
}

export default Search
