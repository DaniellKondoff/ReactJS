import React, { Component } from 'react'
import CreateHotelForm from '../hotels/CreateHotelForm'
import FormHelpers from '../common/FormHelpers'
import hotelAction from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'
import toastr from 'toastr'

class CreateHotelPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hotel: {
        name: 'Best Hotel',
        location: 'Sofia',
        description: 'The bes hotel in city',
        numberOfRooms: 200,
        image: 'http://www.imperialgroup.bg/wp-content/uploads/2014/03/Hotel_Imperial_back_night.jpg',
        parkingSlots: 100
      },
      error: ''
    }

    this.handleHotelCreation = this.handleHotelCreation.bind(this)
    hotelStore.on(
      hotelStore.eventTypes.HOTEL_CREATED,
      this.handleHotelCreation
    )
  }
  handleHotelCreation (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)
      this.setState({error: firstError})
    } else {
      toastr.success(data.message)
      this.props.history.push(`/hotels/details/${data.hotel.id}`)
    }
  }
  handleHotelChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'hotel')
  }
  handleHotelForm (event) {
    event.preventDefault()
    // validation

    let formIsValid = true
    let error = ''

    if (!this.state.hotel.name) {
      error = 'Name is required'
      formIsValid = false
    }

    if (!formIsValid) {
      this.setState({error})
      return
    }

    hotelAction.createHotel(this.state.hotel)
  }
  componentWillUnmount () {
    hotelStore.removeListener(
      hotelStore.eventTypes.HOTEL_CREATED,
      this.handleHotelCreation
    )
  }
  render () {
    return (
      <div>
        <h1>Create Hotel</h1>
        <CreateHotelForm
          hotel={this.state.hotel}
          error={this.state.error}
          onChange={this.handleHotelChange.bind(this)}
          onSave={this.handleHotelForm.bind(this)} />
      </div>
    )
  }
}

export default CreateHotelPage
