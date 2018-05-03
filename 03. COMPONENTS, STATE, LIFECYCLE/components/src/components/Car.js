import React, { Component } from 'react'

class Car extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.car.make}</td>
        <td>{this.props.car.model}</td>
      </tr>
    )
  }
}
export default Car
