import {
  GET_FACILITIES,
  FACILITY_ERROR,
  DELETE_FACILITY,
  ADD_FACILITY,
  GET_FACILITY,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/types'

const initialState = {
  facilities: [],
  facility: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action){
  const {type, payload} = action

  switch(type) {
    case GET_FACILITIES:
      return {
        ...state,
        facilities: payload,
        loading: false
      }

    case GET_FACILITY:
      return {
        ...state,
        facility: payload,
        loading: false
      }

    case ADD_FACILITY:
      return {
        ...state,
        facilities: [...state.facilities, payload],
        loading: false
      }  

    case DELETE_FACILITY:
      return {
        ...state,
        facilities: state.facilities.filter(facility => facility._id != payload),
        loading: false
      }

    case ADD_COMMENT:
      return {
        ...state,
        facility: {...state.facility, comments: payload},
        loading: false
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        facility: {
          ...state.facility,
          comments: state.facility.comments.filter(comment => comment._id !== payload),
          loading: false
        }
      }
    case FACILITY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: 
      return state
  
  }
}