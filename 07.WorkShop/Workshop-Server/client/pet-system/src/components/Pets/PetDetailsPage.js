import React, { Component } from 'react'
import petAction from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import PetsCommentsForm from '../Pets/PetsCommentForm'

class PetDetailsPage extends Component {
  constructor (props) {
    super(props)

    let params = this.props.match.params
    let id = params.id

    this.state = {
      id: id,
      pet: {},
      petComment: ''
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
  handleChange (event) {
    const target = event.target
    const value = target.value
    let petComment = this.state.petComment
    petComment = value
    this.setState({
      petComment
    })
  }
  handlePetCommentPost (event) {
    event.preventDefault()
    // validate
    petAction.createPost(this.state.pet.id, this.state.petComment)
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
        <br />
        <PetsCommentsForm
          value={this.state.petCommentValue}
          onChange={this.handleChange.bind(this)}
          onPost={this.handlePetCommentPost.bind(this)}
        />
      </div>
    )
  }
}

export default PetDetailsPage
