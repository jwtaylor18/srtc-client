import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({isAuthenticated}) => {

  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
   <div>
     Landing page placeholder
    <div>
      <Link to='/register'>Register</Link>
    </div>
    <div>
      <Link to='/login'>Login</Link>
    </div>
  
     
     
   </div>
  )

}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const stpm = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(stpm)(Landing)