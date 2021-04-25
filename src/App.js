import './App.css';
import Navbar from './components/layout/navbar'
import Landing from './components/layout/landing'
import Landing2 from './components/layout/landing2'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Alert from './components/layout/alert'
import Dashboard from './components/dashboard/dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/profile-forms/create-profile'
import EditProfile from './components/profile-forms/edit-profile'
import Profiles from './components/profiles/profiles'
import Profile from './components/profile/profile'
import Facilities from './components/facilities/facilities'
import Facility from './components/facility/facility-item'
import CreateFacility from './components/facilities/create-facility'
import Weather from './components/weather/weather'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Axios from "axios"
import React, {useEffect} from 'react'

//Redux stuff
import {Provider} from 'react-redux'
import store from './store'
import setAuthToken from './utils/set-auth-token';
import {loadUser} from './actions/auth-actions'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

Axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          {/* <Route exact path="/" component={Landing}/> */}
          <Route exact path="/" component={Landing2}/>
          <section className="container">
            <Alert/>
            <Switch>
              <Route exact path="/register" component={Register}/>
              <PrivateRoute exact path="/weather" component={Weather}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profiles" component={Profiles}/>
              <Route exact path="/profile/:profileId" component={Profile}/>
              <Route exact path="/profile" component={Profile}/>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
              <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
              <PrivateRoute exact path="/facilities" component={Facilities}/>
              <PrivateRoute exact path="/facilities/details/:facilityId" component={Facility}/>
              <PrivateRoute exact path="/create-facility" component={CreateFacility}/>
            </Switch>
          </section>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
