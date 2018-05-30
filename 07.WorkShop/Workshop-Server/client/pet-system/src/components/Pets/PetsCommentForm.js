import React, { Component } from 'react'

class PetsCommentForm extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Enter a comment:
          </label>
          <br />
          <textarea name='petComment' type='textarea' value={this.props.petCommentValue} onChange={this.props.onChange} />
          <br />
          <input type='submit' onClick={this.props.onPost} />
        </form>
      </div>
    )
  }
}

export default PetsCommentForm
