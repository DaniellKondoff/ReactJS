import React, { Component } from 'react'

class Input extends Component {
  render () {
    let wrapperClass = 'form-control'
    if (this.props.errors && this.props.errors.lenght > 0) {
      wrapperClass += ' has-error'
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>
          {this.props.placeholder}
        </label>
        <input
          type='text'
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange} />
        <br />
        <span className='error'>{this.props.errors}</span>
      </div>
    )
  }
}

export default Input
