import './App.css';
import Navbar from './components/layout/navbar'
import Landing from './components/layout/landing'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Alert from './components/layout/alert'
import Dashboard from './components/dashboard/dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/profile-forms/create-profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {useEffect} from 'react'

//Redux stuff
import {Provider} from 'react-redux'
import store from './store'
import setAuthToken from './utils/set-auth-token';
import {loadUser} from './actions/auth-actions'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <section className="container">
            <Alert/>
            <Switch>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
            </Switch>
          </section>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
