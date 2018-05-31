import React, { Component } from 'react'
import Input from '../common/Input'

class RegisterForm extends Component {
  render () {
    return (
      <form>
        <div>{this.props.error}</div>
        <Input
          name='name'
          placeholder='Name'
          value={this.props.user.name}
          onChange={this.props.onChange} />
        <br />
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
        <label htmlFor='confirmPassword'>
                    Confirm Password
        </label>
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={this.props.user.confirmPassword}
          onChange={this.props.onChange} />
        <br />
        <input type='submit' onClick={this.props.onSave} />
      </form>
    )
  }
}

export default RegisterForm
