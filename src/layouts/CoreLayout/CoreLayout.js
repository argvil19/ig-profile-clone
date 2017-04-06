import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='wrapper'>
    <div className='header'>
      <div className='grid'>
        <Header />
      </div>
    </div>
    <div className='page-body'>
      <div className='grid content'>
        {children}
      </div>
    </div>
    <div className='footer grid'>
      <Footer />
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
