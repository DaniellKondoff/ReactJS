import React, { Component } from 'react'
import observerMenu from './../utils/observer'

class Characher extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div onClick={() => observerMenu.executeObserver('changeFocus', {id: this.props.id})} className='char-img'>
        <img className='char-img' alt='chars' src={this.props.url} />
      </div>
    )
  }
}

export default Characher
