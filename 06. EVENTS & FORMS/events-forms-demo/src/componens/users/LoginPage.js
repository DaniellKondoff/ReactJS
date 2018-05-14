import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Auth from './Auth'
import userData from '../../data/userData'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: ''
    }
  }
  handleUserChange (event) {
    const target = event.target
    const field = target.name
    const value = target.value

    const user = this.state.user
    user[field] = value

    this.setState({user})
  }

  loginUser (event) {
    event.preventDefault()

    // validate user input

    const user = this.state.user

    userData
      .login(user.email, user.password)
      .then(resutl => {
        if (resutl.error) {
          this.setState({
            error: resutl.error
          })

          return
        }

        Auth.authenticateUser(resutl.token)
        this.props.history.push('/account')
      })
  }

  render () {
    return (
      <div>
        <h1>Login Into Your Account</h1>
        <LoginForm user={this.state.user} onChange={this.handleUserChange.bind(this)} error={this.state.error} onSave={this.loginUser.bind(this)} />
      </div>
    )
  }
}

export default LoginPage
