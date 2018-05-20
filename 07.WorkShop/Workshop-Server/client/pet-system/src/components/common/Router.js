import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ListPetsPage from '../Pets/ListPetsPage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={ListPetsPage} />
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
      </Switch>
    )
  }
}

export default Router
