import React, { Component } from 'react'
import Navbar from './components/common/Navbar'
import Router from './components/common/Router'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
