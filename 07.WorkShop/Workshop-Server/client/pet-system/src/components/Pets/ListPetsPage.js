import React, { Component } from 'react'
import queryString from 'query-string'
import petAction from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import { Link } from 'react-router-dom'

class ListPetsPage extends Component {
  constructor (props) {
    super(props)

    let query = queryString.parse(this.props.location.searc)
    let page = parseInt(query.page, 10) || 1

    this.state = {
      pets: [],
      page: page
    }

    this.handlePetsFteched = this.handlePetsFteched.bind(this)
    petStore.on(petStore.eventTypes.PETS_FETCHED,
      this.handlePetsFteched)
  }
  componentDidMount () {
    petAction.all(this.state.page)
  }
  componentWillUnmount () {
    petStore.removeListener(
      petStore.eventTypes.PETS_FETCHED,
      this.handlePetsFteched
    )
  }
  handlePetsFteched (data) {
    this.setState({
      pets: data
    })
  }
  goToPrevPage () {
    let page = this.state.page

    if (page < 1) {
      return
    }

    page--

    this.setState({page: page})

    this.props.history.push(`/?page=${this.state.page}`)

    petAction.all(page)
  }

  goToNextPage () {
    if (this.state.pets.length === 0) {
      return
    }

    let page = this.state.page
    page++

    this.setState(
      {page: page}
    )
    this.props.history.push(`/?page=${this.state.page}`)

    petAction.all(page)
  }
  render () {
    let pets = 'No pets available'

    if (this.state.pets.length > 0) {
      pets = this.state.pets.map(pet => (
        <div key={pet.id}>
          <Link to={'/pets/details/' + pet.id}> {pet.id} -{pet.name}</Link>
        </div>
      ))
    }

    return (
      <div>
        <h1>All Pets</h1>
        {pets}
        <div>
          <button onClick={this.goToPrevPage.bind(this)}>
            Prev
          </button>
          <button onClick={this.goToNextPage.bind(this)}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default ListPetsPage
