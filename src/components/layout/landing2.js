import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import BackgroundSlider from 'react-background-slider'
import image1 from '../../image-assets/sky-shot.jpg'
import image2 from '../../image-assets/clay-court.jpg'
import image3 from '../../image-assets/blue-hard-court.jpg'



const Landing2 = ({isAuthenticated}) => {

  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
   <Fragment>
     <BackgroundSlider
      images={[image2, image1, image3]}
      duration={6}
      transition={3}
      />
     
    </Fragment>
  
     
  )

}

Landing2.propTypes = {
  isAuthenticated: PropTypes.bool
}

const stpm = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(stpm)(Landing2)