import React from 'react'
import Header from './Header'
import Posts from './Posts'

export const Profile = (props) => {
  const { profile, posts } = props

  if (profile)
    return (
      <div>
        <Header profile={profile} />
        <Posts posts={posts}/>
      </div>
    )
  return (<div></div>)
}

export default Profile
