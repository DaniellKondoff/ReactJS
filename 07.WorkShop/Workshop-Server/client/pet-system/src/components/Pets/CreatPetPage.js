import React, { Component } from 'react'
import CreatePetForm from './CreatePetForm'
import FormHelpers from '../common/FormHelpers'
import petAction from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import toastr from 'toastr'

class CreatePetPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pet: {
        name: 'Pesho',
        age: 2,
        type: 'Cat',
        image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        breed: 'Street'
      },
      error: ''
    }

    this.handlePetCreation = this.handlePetCreation.bind(this)
    petStore.on(
      petStore.eventTypes.PET_CREATED,
      this.handlePetCreation)
  }

  handlePetChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'pet')
  }
  handlePetForm (event) {
    event.preventDefault()
    // validate
    petAction.create(this.state.pet)
  }
  handlePetCreation (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)
      this.setState({error: firstError})
    } else {
      toastr.success(data.message)
      this.props.history.push(`/pets/details/${data.pet.id}`)
    }
  }
  componentWillUnmount () {
    petStore.removeListener(
      petStore.eventTypes.PET_CREATED,
      this.handlePetCreation
    )
  }
  render () {
    return (
      <div>
        <h1>Create Your Pet</h1>
        <CreatePetForm
          pet={this.state.pet}
          error={this.state.error}
          onChange={this.handlePetChange.bind(this)}
          onSave={this.handlePetForm.bind(this)} />
      </div>
    )
  }
}

export default CreatePetPage
