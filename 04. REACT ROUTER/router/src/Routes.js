import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import SomeParamPage from './components/SomeParamPage'
import PrivateRoute from './components/PrivateRoute'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/page/with/:id' component={SomeParamPage} />
    <Route path='/contact' render={props => (
      <h2>From Render</h2>
    )} />
    <PrivateRoute path='/private' component={AboutPage} />
    <Redirect from='/about-us' to='/about' />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
