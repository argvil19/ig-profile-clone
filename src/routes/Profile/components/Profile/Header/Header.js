import React from 'react'
import './Header.scss'

export const Header = (props) => {
  const { profile } = props

  if (profile)
    return (
      <div className='container profile-container' >
        <div className='row'>
          <div className='col-xs-12 col-sm-3 profile-img-container'>
            <div className='img-container'>
              <img src={profile.profile_picture} />
            </div>
          </div>
          <div className='col-xs-12 col-sm-9 info-container'>
            <div className='title-container'>
              <h1>{profile.username}</h1>
              <button className='btn'>Seguir</button>
              <span><i className='fa fa-ellipsis-h'></i></span>
            </div>
            <ul className='counters-container'>
              <li><span>{profile.counts.media}</span> publicaciones</li>
              <li><span>{profile.counts.followed_by}</span> seguidores</li>
              <li><span>{profile.counts.follows}</span> seguidos</li>
            </ul>
            <div className='bio-container'>
              <p><span>{profile.full_name}</span> {profile.bio} {profile.website && <a href={profile.website}>{profile.website}</a>}</p>
            </div>
          </div>
        </div>
      </div>
    )
  return (<div></div>)
}

export default Header
