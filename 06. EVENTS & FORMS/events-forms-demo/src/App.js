import React, { Component } from 'react'
import './App.css'
import Child from './Child'
import AuthorPage from './componens/AuthorPage'

class App extends Component {
  headerClicked (event) {
    window.alert('clicked')
    console.log(event)
    console.log(event.target)
  }

  inputChange (event) {
    const target = event.target
    let field = target.name
    let value = target.value

    console.log(`${field} - ${value}`)
  }
  render () {
    return (
      <div className='App'>
        <Child headerClicked={this.headerClicked.bind(this)} inputChange={this.inputChange.bind(this)} />
        <AuthorPage />
      </div>
    )
  }
}

export default App
