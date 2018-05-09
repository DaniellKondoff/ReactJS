import React, { Component } from 'react'
import './App.css'
import Slider from './components/Slider'
import CharGen from './components/CharGen'
import CharDetails from './components/CharDetails'
import observerMenu from './utils/observer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      focusedChar: 0
    }
    this.eventHandler = (newState) => {
      this.setState(newState)
    }
  }

  componentDidMount () {
    observerMenu.addObserver('changeFocus', this.eventHandler)
  }
  render () {
    return (
      <div className='App'>
        <Slider />
        <CharGen />
        <CharDetails />
      </div>
    )
  }
}

export default App
