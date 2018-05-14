import React, { Component } from 'react'

class LoginForm extends Component {
  render () {
    return (
      <form>
        <div>{this.props.error}</div>
        <label htmlFor='email'>
          E-mail
        </label>
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={this.props.user.email}
          onChange={this.props.onChange} />
        <br />
        <label htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.props.user.password}
          onChange={this.props.onChange} />
        <br />
        <input type='submit' onClick={this.props.onSave} />
      </form>
    )
  }
}

export default LoginForm
