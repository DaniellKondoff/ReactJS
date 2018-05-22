import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ListPetsPage from '../Pets/ListPetsPage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import LogoutPage from '../users/LogoutPage'
import PrivateRoute from './PrivateRoute'
import CreatePetPage from '../Pets/CreatPetPage'

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={ListPetsPage} />
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
        <PrivateRoute path='/users/logout' component={LogoutPage} />
        <PrivateRoute path='/pets/add' component={CreatePetPage} />
      </Switch>
    )
  }
}

export default Router
