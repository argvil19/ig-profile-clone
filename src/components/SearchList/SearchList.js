import React from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import './SearchList.scss'

const enhanceWithClickOutside = require('react-click-outside')

class SearchList extends React.Component {
  constructor(props) {
    super(props)

  }

  handleUserClick(id) {
    browserHistory.push('/profile/' + id)
    this.props.onHide(id)
  }

  handleClickOutside(e) {
    if (e.toElement.tagName.toLowerCase() === 'input') {
      return;
    }
    this.props.onHide(e)
  }

  render() {
    const { users } = this.props
    const comp = this

    if (users.length) {
      return (
        <div className={'popover-parent ' + (this.props.show ? '' : 'hidden')}>
          <span></span>
          <div className='popover-container'>
            <ul>
              {users.map((user, key) => 
                (<li key={key} onClick={comp.handleUserClick.bind(this, user.id)}>
                  <div className='profile-test'>
                    <img src={user.profile_picture}/>
                  </div>
                  <div className='text-container'>
                    <span className='username'>{user.username}</span>
                    {user.full_name && <span className='realname'><br />{user.full_name}</span>}
                  </div>
                </li>)
              )}
            </ul>
          </div>
        </div>
      )
    } else {
      return <span></span>
    }
  }
}

export default enhanceWithClickOutside(SearchList)
