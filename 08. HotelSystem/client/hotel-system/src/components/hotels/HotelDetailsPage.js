import React, { Component } from 'react'
import hotelAction from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'
import HotelReviews from '../hotels/HotelReviews'

class HotelDetailsPage extends Component {
  constructor(props) {
    super(props)

    let params = this.props.match.params
    let id = params.id

    this.state = {
      id: id,
      hotel: {}
    }

    this.handleHotelDetailsFetched = this.handleHotelDetailsFetched.bind(this)
    hotelStore.on(hotelStore.eventTypes.HOTEL_GOT,
      this.handleHotelDetailsFetched)
  }
  componentDidMount() {
    hotelAction.getById(this.state.id)
  }
  componentWillUnmount() {
    hotelStore.removeListener(
      hotelStore.eventTypes.HOTEL_GOT,
      this.handleHotelDetailsFetched
    )
  }
  handleHotelDetailsFetched(data) {
    this.setState({
      hotel: data
    })
  }
  render() {
    const hotel = this.state.hotel
    return (
      <div className='hotel-details'>
        <h1>Hotel Details</h1>
        <h2>{hotel.name} - {hotel.location}</h2>
        <h2>{hotel.numberOfRooms} rooms - {hotel.parkingSlots} available parking slots</h2>
        <div>
          <img src={hotel.image} alt={hotel.description} />
        </div>
        <div>
          <HotelReviews hotelId = {this.state.id}/>
        </div>
      </div>
    )
  }
}

export default HotelDetailsPage
