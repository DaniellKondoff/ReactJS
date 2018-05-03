import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    const myElement = <h1>Heading! </h1>
    let cars = [
      { make: 'Opel', model: 'Astra' },
      { make: 'Bmw', model: 'M3 XD' }
    ]

    const myCarsEelement = cars.map(car => (
      <div>{car.make} - {car.model}</div>
    ))

    return (
      <div>
        {myCarsEelement}
        <p>
         Hello Word!
        </p>
      </div>
    )
  }
}

export default App
