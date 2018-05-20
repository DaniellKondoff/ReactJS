import React, { Component } from 'react'
import Input from '../common/Input'

class LoginForm extends Component {
  render () {
    return (
      <form>
        <div>
          {this.props.error}
        </div>
        <Input
          name='name'
          placeholder='Name'
          value={this.props.user.email}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='password'
          type='password'
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
