import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import LogoutPage from '../users/LogoutPage'
import PrivateRoute from './PrivateRoute'

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
        <PrivateRoute path='/users/logout' component={LogoutPage} />
      </Switch>
    )
  }
}

export default Router
