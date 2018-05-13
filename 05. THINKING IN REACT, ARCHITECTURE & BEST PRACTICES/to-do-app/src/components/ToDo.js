import React, { Component } from 'react'
import ToDoActions from '../actions/ToDoActions'

class ToDo extends Component {
  completeToDo (event) {
    event.preventDefault()
    ToDoActions.completeToDo(this.props.id)
  }
  render () {
    return (
      <li>
        {this.props.title} - {this.props.completed ? 'DONE' : (
          <button onClick={this.completeToDo.bind(this)}>Pending</button>
        )}
      </li>
    )
  }
}

export default ToDo
