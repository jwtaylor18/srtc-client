import axios from 'axios'
import {setAlert} from './alert-actions'
import {
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILE,
  PROFILE_ERROR

} from './types'

//Get the current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/profile/me')

    dispatch ({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({type: CLEAR_PROFILE})
  
  try {
    const res = await axios.get('/profile')

    dispatch ({
      type: GET_PROFILES,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: "Error in get all profiles", status: 500}
    })
  }
}

//Get profile by ID
export const getProfileById = userId => async dispatch => {
  dispatch({type: CLEAR_PROFILE})
  
  try {
    const res = await axios.get(`/profile/user/${userId}`)

    dispatch ({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: "Error in get profile by ID action", status: 500}
    })
  }
}

//Create or update profile
//Set edit to true when editing an existing profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/profile', formData, config)

    dispatch ({
      type: GET_PROFILE,
      payload: res.data
    })

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'))
    if(!edit) {
      history.push('/dashboard')
    }

  } catch (err) {

    const errors = err.response.data.errors

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}