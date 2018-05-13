import React, { Component } from 'react'
import ToDoStore from '../stores/ToDoStore'
import ToDo from './ToDo'
import ToDoActions from '../actions/ToDoActions'

class ToDoList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      todos: []
    }

    ToDoStore.on('change', () => {
      this.getAllTodos()
    })
  }

  componentDidMount () {
    this.getAllTodos()
  }

  getAllTodos () {
    ToDoStore
      .getAll()
      .then(todos => this.setState({todos}))
  }

  handleChange (event) {
    this.setState({title: event.target.value})
  }

  createToDo (event) {
    event.preventDefault()
    ToDoActions.createToDo(this.state.title)
    this.setState({title: ''})
  }

  render () {
    const { todos } = this.state

    const toDoElements = todos.map(todo => (
      <ToDo key={todo.id} {...todo} />
    ))

    return (
      <div>
        <ul>
          {toDoElements}
          <input
            type='text'
            ref='title'
            value={this.state.title}
            onChange={this.handleChange.bind(this)} />
          <button onClick={this.createToDo.bind(this)}>
            Add
          </button>
        </ul>
      </div>
    )
  }
}

export default ToDoList
