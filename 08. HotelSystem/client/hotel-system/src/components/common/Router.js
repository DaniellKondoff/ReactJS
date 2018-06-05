import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import LogoutPage from '../users/LogoutPage'
import PrivateRoute from './PrivateRoute'
import CreateHotelPage from '../hotels/CreateHotelPage'
import ListHotelPage from '../hotels/ListHotelPage'
import HotelDetailsPage from '../hotels/HotelDetailsPage'

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
        <PrivateRoute path='/users/logout' component={LogoutPage} />
        <PrivateRoute path='/hotels/create' component={CreateHotelPage} />
        <PrivateRoute path='/hotels/list' component={ListHotelPage} />
        <PrivateRoute path='/hotels/details/:id' component={HotelDetailsPage} />
      </Switch>
    )
  }
}

export default Router
