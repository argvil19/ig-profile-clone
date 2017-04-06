import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Footer.scss'

const Links = [
  'Información',
  'Asistencia',
  'Blog',
  'Prensa',
  'API',
  'Empleo',
  'Privacidad',
  'Condiciones',
  'Idioma'
]

export const Footer = () => (
  <div className='flex-footer'>
    <ul>
      {Links.map(link => <li><a>{link.toUpperCase()}</a></li>)}
    </ul>
    <div>
      <span className='copyright'>© 2017 INSTAGRAM</span>
    </div>
  </div>
)

export default Footer
