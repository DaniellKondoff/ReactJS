import React, { Component } from 'react'
import Input from './common/Input'

class AuthorForm extends Component {
  render () {
    return (
      <form>
        <Input
          name='firstName'
          placeholder='First Name'
          value={this.props.author.firstName}
          errors={this.props.errors.firstName}
          onChange={this.props.onChange} />
        <Input
          name='lastName'
          placeholder='Last Name'
          value={this.props.author.lastName}
          errors={this.props.errors.lastName}
          onChange={this.props.onChange} />
        <input type='submit' value='Add Author' onClick={this.props.onSave} />
      </form>
    )
  }
}

export default AuthorForm
