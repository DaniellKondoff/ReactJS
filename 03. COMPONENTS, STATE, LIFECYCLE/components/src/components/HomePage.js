import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {date: new Date()}
  }

  render () {
    return (
      <div>
        <Header menuItem='Menu Drop DOwn' />
        <h1>
          {this.props.homeMessage}
        </h1>
        <Footer message='GoodBye' />
      </div>
    )
  }
}

export default HomePage
