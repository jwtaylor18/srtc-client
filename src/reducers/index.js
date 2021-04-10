import { combineReducers } from 'redux';
import alertReducer from './alert-reducer'
import authReducer from './auth-reducer'
import profileReducer from './profile-reducer'
import facilityReducer from './facility-reducer'
 
export default combineReducers({
  alertReducer,
  authReducer,
  profileReducer,
  facilityReducer
});