import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'
import FormHelpers from '../common/FormHelpers'

class RegisterPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '1234',
        confirmPassword: '1234',
        name: 'test'
      },
      error: ''
    }

    this.handleUserRegistration = this.handleUserRegistration.bind(this)
    userStore.on(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }
  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }
  handleUserForm (event) {
    event.preventDefault()
    if (!this.validateUser()) {
      return
    }

    userActions.register(this.state.user)
  }
  handleUserRegistration (data) {
    if (!data.success) {
      let firstError = data.message
      if (data.errors) {
        firstError = Object.keys(data.errors).map(k => data.errors[k])[0]
      }
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push('/users/login')
    }
  }
  validateUser () {
    const user = this.state.user
    let formIsValid = true
    let error = ''
    if (user.password !== user.confirmPassword) {
      error = 'Invalid Password'
      formIsValid = false
    }

    if (error) {
      this.setState({error})
    }

    return formIsValid
  }
  render () {
    return (
      <div>
        <h1>Register User</h1>
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default RegisterPage
