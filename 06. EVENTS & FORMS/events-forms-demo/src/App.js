import React, { Component } from 'react'
import './App.css'
import Navbar from './componens/Navbar'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './componens/common/PrivareRoute'
import RegisterPage from './componens/users/RegisterPage'
import AccountPage from './componens/users/AccountPage'
import LogoutPage from './componens/users/LogoutPage'
import LoginPage from './componens/users/LoginPage'

class App extends Component {
  headerClicked (event) {
    window.alert('clicked')
    console.log(event)
    console.log(event.target)
  }

  inputChange (event) {
    const target = event.target
    let field = target.name
    let value = target.value

    console.log(`${field} - ${value}`)
  }
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={LoginPage} />
          <PrivateRoute path='/account' component={AccountPage} />
          <PrivateRoute path='/logout' component={LogoutPage} />
        </Switch>
      </div>
    )
  }
}

export default App
