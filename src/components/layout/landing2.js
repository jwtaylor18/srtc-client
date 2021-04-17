import React, {Fragment, useEffect, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import BackgroundSlider from 'react-background-slider'
import image1 from '../../image-assets/sky-shot.jpg'
import image2 from '../../image-assets/clay-court.jpg'
import image3 from '../../image-assets/blue-hard-court.jpg'
import '../../styles/landing/homepage-styles.css'
import axios from 'axios'



const Landing2 = ({isAuthenticated}) => {

  const [numNewCourts, setNumNewCourts] = useState(5)

  useEffect(async () => {
    try {
      const res = await axios.get(`/facilities/count/new`)
      setNumNewCourts(res.data)
    } catch {
      setNumNewCourts(4)
    }
  }, [])

  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
   <Fragment>

     <div id="test">
      <h1>Welcome to TennisDesk</h1>
      <h4><span class="badge bg-secondary">{numNewCourts} new courts recently added</span></h4>
     </div>
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