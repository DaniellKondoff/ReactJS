import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import Auth from './Auth'
import userData from '../../data/userData'

class RegisterPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: ''
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

  registerUser (event) {
    event.preventDefault()

    if (!this.validateUser(this.state.user)) {
      this.setState({
        error: 'Passwords do not match'
      })
      return
    }

    const user = this.state.user

    userData
      .register(user.email, user.password)
      .then(result => {
        if (result.error) {
          this.setState({error: result.error})
          return
        }
        Auth.authenticateUser(result.token)
        this.props.history.push('/account')
      })

  // Register user on the server
  // Regirect to some page
  }

  validateUser (user) {
    if (user.password !== user.confirmPassword) {
      return false
    }

    return true
  }
  render () {
    return (
      <div>
        <h1>Register User</h1>
        <RegisterForm user={this.state.user} error={this.props.error} onChange={this.handleUserChange.bind(this)} onSave={this.registerUser.bind(this)} />
      </div>
    )
  }
}

export default RegisterPage
