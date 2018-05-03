import React, { Component } from 'react'
import './App.css'

class App extends Component {
  formatUser (firstName, lastName) {
    return firstName + ' ' + lastName
  }

  render () {
    let data = [
      {id: 1, name: 'Vankata', Age: 12},
      {id: 2, name: 'Maca', Age: 5},
      {id: 3, name: 'Meri', Age: 8}
    ]

    let catlist = data.map(cat => (
      <li key={cat.id}>
        My name is {cat.name}. I am {cat.Age} years old!
      </li>
    ))

    return (
      <ul>
        {catlist}
      </ul>
    )
  }
}

export default App
