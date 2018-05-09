import React, { Component } from 'react'
import Characher from './Characher'

class CharGen extends Component {
  constructor () {
    super()

    this.state = {
      charArr: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:9999/roster')
      .then(data => {
        return data.json()
      })
      .then(parsedData => {
        this.setState({
          charArr: parsedData
        })
      })
  }
  render () {
    return (
      <div>
        {this.state.charArr.map(c => {
          return <Characher key={c.id} url={c.url} />
        })}
      </div>
    )
  }
}

export default CharGen
