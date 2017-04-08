import React from 'react'
import './PhotoGrid.scss'

export const PhotoGrid = (props) => {
  const posts = props.posts || []
  const rowArray = []
  const imagesArray = []
  let counter = 0

  posts.forEach((item, key) => {
    if (key % 3 === 0 && key !== 0) {
      rowArray.push(imagesArray.slice())
      imagesArray.length = 0
    }
    imagesArray.push(item)
    if (key === posts.length - 1) {
      rowArray.push(imagesArray)
    }
  })

  if (rowArray.length)
    return (
      <div className='container photo-grid'>
        {rowArray.map(row => {
          return (
            <div className='row row-grid'>
              {row.map(item => {
                return (
                  <div className='img-grid-container'>
                    <img src={item.url} className='img-grid'/>
                    <ul className='img-grid-cover'>
                      <li><i className='fa fa-heart'></i> {item.likes}</li>
                      <li><i className='fa fa-comment'></i> {item.comments}</li>
                    </ul>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  return <div></div>
}

export default PhotoGrid
