import dispatcher from '../dispatcher'

let toDoActions = {
  createToDo: (title) => {
    dispatcher.dispatch({
      type: 'CREATE_TODO',
      title
    })
  },
  completeToDo: (id) => {
    dispatcher.dispatch({
      type: 'COMPLETE_TODO',
      id
    })
  }
}

export default toDoActions
