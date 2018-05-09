import React, { Component} from 'react'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.redirectToAbout = this.redirectToAbout.bind(this)
  }

  redirectToAbout () {
    this.props.history.push('/about')
  }
  render () {
    return (
      <div>
        Hi From Home Page
        <div>
          <button onClick={this.redirectToAbout}>Go to About</button>
        </div>
      </div>
    )
  }
}

export default HomePage
