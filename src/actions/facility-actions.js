import axios from 'axios'
import {setAlert} from './alert-actions'
import {GET_FACILITIES, FACILITY_ERROR, DELETE_FACILITY, 
  ADD_FACILITY, GET_FACILITY, ADD_COMMENT, REMOVE_COMMENT} from './types'

//Get all facilities
export const getFacilities = () => async dispatch => {
  try {
    const res = await axios.get('/facilities')

    dispatch({
      type: GET_FACILITIES,
      payload: res.data
    })
  } catch (err) {
      dispatch({
        type: FACILITY_ERROR,
        payload: {msg: "get facilities 500 error manually caught", status: 500}
      })
  }
}

//Delete facility
export const deleteFacility = id => async dispatch => {
  try {
    const res = await axios.delete(`/facilities/${id}`)

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
    const res = await axios.post('/facilities', formData, config)

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
    const res = await axios.get(`/facilities/${id}`)

    dispatch({
      type: GET_FACILITY,
      payload: res.data
    })
  } catch (err) {
      dispatch({
        type: FACILITY_ERROR,
        payload: {msg: "Error in get facility action", status: 500}
      })
  }
}

//Add a comment to a facility
export const addComment = (facilityId, formData) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`/facilities/${facilityId}/comment`, formData, config)

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    })

    dispatch(setAlert('Comment Added', 'success'))
  }
  catch (err) {
    dispatch({
      type: FACILITY_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//Delete commnet
export const deleteComment = (facilityId, commentId) => async dispatch => {

  try {
    const res = await axios.delete(`/facilities/${facilityId}/comment/${commentId}`)

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    })

    dispatch(setAlert('Comment Deleted', 'success'))
  }
  catch (err) {
    dispatch({
      type: FACILITY_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}