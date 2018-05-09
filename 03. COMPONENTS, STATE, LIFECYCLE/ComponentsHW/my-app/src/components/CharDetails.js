import React, { Component } from 'react'
import Characher from './Characher'

class CharDetails extends Component {
  constructor () {
    super()

    this.url = 'https://avatarfiles.alphacoders.com/889/88985.png'
    this.state = {
      id: 0,
      curChar: {}
    }
  }

  componentDidMount () {
    fetch('http://localhost:9999/character/' + this.state.id)
      .then(data => {
        return data.json()
      })
      .then(parsedData => {
        this.setState({curChar: parsedData})
      })
  }

  render () {
    return (
      <div>
        <fieldset>
          <Characher url={this.state.curChar.url} />
          <p>{this.state.curChar.bio}</p>
        </fieldset>
      </div>
    )
  }
}

export default CharDetails
