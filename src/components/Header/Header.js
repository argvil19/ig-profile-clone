import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import SearchContainer from '../../containers/SearchContainer'

const logo = require('./assets/logo.png');

const Icons = [
  'fa-compass',
  'fa-heart-o',
  'fa-user-o'
]

export const Header = () => (
  <div className='flex-header'>
    <div className='logo-container'>
      <Link to='/'>
        <img 
          src={logo}
          className='img-responsive logo'
        />
        <i className='fa fa-instagram logo-collapse'></i>
      </Link>
    </div>
    <SearchContainer />
    <div className='icon-container'>
      <ul>
        {Icons.map((icon, key) => <li key={key}><i className={'fa ' + icon}></i></li>)}
      </ul>
    </div>
  </div>
)

export default Header
