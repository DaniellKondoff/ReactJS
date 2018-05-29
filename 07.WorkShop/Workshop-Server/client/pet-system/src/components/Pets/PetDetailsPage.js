import React, { Component } from 'react'
import petAction from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

class PetDetailsPage extends Component {
  constructor (props) {
    super(props)

    let params = this.props.match.params
    let id = params.id

    this.state = {
      id: id,
      pet: {}
    }

    this.handlePetDetailsFteched = this.handlePetDetailsFteched.bind(this)
    petStore.on(petStore.eventTypes.DETAILS_GOT,
      this.handlePetDetailsFteched)
  }

  componentDidMount () {
    petAction.getDetailsById(this.state.id)
  }
  componentWillUnmount () {
    petStore.removeListener(
      petStore.eventTypes.DETAILS_GOT,
      this.handlePetDetailsFteched
    )
  }
  handlePetDetailsFteched (data) {
    this.setState({
      pet: data
    })
    console.log(this.state.pet)
  }
  render () {
    const pet = this.state.pet
    return (
      <div>
        <h1>Pet Details for Pet {this.state.pet.name}</h1>
        <ul>
          <li>Name - {pet.name}</li>
          <li>Age - {pet.age}</li>
          <li>Breed - {pet.type}</li>
          <li>
            <img src={pet.image} width='250px' />
          </li>
        </ul>
      </div>
    )
  }
}

export default PetDetailsPage
