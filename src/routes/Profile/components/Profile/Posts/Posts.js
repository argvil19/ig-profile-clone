import React from 'react'
import './Posts.scss'
import PhotoGrid from './PhotoGrid'

export const Posts = (props) => {
  const posts = props.posts || []
  const images = posts.map(item => ({
    url: item.images.standard_resolution.url,
    likes: item.likes.count,
    comments: item.comments.count,
    type: item.type
  }))

  return (
    <div className='container posts-container' >
      <PhotoGrid posts={images}/>
    </div>
  )
}

export default Posts
