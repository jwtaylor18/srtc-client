import axios from 'axios'
import {setAlert} from './alert-actions'
import {GET_FACILITIES, FACILITY_ERROR, DELETE_FACILITY, ADD_FACILITY, GET_FACILITY} from './types'

//Get all facilities
export const getFacilities = () => async dispatch => {
  try {
    const res = await axios.get('/api/facilities')

    dispatch({
      type: GET_FACILITIES,
      payload: res.data
    })
  } catch (err) {
      dispatch({
        type: FACILITY_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status}
      })
  }
}

//Delete facility
export const deleteFacility = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/facilities/${id}`)

    dispatch({
      type: DELETE_FACILITY,
      payload: id
    })

    dispatch(setAlert('Facility Removed', 'success'))
  }
  catch (err) {
    dispatch({
      type: FACILITY_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//Add a facility
export const addFacility = (formData, history) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/facilities', formData, config)

    dispatch({
      type: ADD_FACILITY,
      payload: res.data
    })

    dispatch(setAlert('Facility Created', 'success'))
    history.push('/facilities')
  }
  catch (err) {
    dispatch({
      type: FACILITY_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//Get a facility by ID
export const getFacility = id => async dispatch => {
  try {
    const res = await axios.get(`/api/facilities/${id}`)

    dispatch({
      type: GET_FACILITY,
      payload: res.data
    })
  } catch (err) {
      dispatch({
        type: FACILITY_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status}
      })
  }
}