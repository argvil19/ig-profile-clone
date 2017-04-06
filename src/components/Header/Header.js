import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

const logo = require('./assets/logo.png');

const Icons = [
  'fa-compass',
  'fa-heart-o',
  'fa-user-o'
]

export const Header = () => (
  <div className='flex-header'>
    <div className='logo-container'>
      <img 
        src={logo}
        className='img-responsive logo'
      />
    </div>
    <div className='input-header'>
      <input placeholder='Buscar' />
      <span></span>
    </div>
    <div className='icon-container'>
      <ul>
        {Icons.map((icon, key) => <li key={key}><i className={'fa ' + icon}></i></li>)}
      </ul>
    </div>
  </div>
)

export default Header
