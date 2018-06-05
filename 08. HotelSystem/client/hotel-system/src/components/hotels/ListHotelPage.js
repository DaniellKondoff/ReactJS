import React, { Component } from 'react'
import hotelAction from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

class ListHotelPage extends Component {
  constructor (props) {
    super(props)

    let query = queryString.parse(this.props.location.search)
    let page = parseInt(query.page, 10) || 1
    this.state = {
      hotels: [],
      page: page
    }

    this.handleHotelsFtetched = this.handleHotelsFtetched.bind(this)
    hotelStore.on(hotelStore.eventTypes.ALL_HOTELS_GOT,
      this.handleHotelsFtetched
    )
  }
  componentDidMount () {
    hotelAction.getAll(this.state.page)
  }
  componentWillUnmount () {
    hotelStore.removeListener(
      hotelStore.eventTypes.ALL_HOTELS_GOT,
      this.handleHotelsFtetched
    )
  }
  handleHotelsFtetched (data) {
    this.setState({
      hotels: data
    })
  }
  goToNextPage () {
    let page = this.state.page
    if (this.state.hotels.length === 0) {
      return
    }

    page++

    // this.setState({
    //   page
    // })

    hotelAction.getAll(page)

    this.props.history.push(`/?page=${page}`)
  }
  goToPrevPage () {
    let page = this.state.page
    if (page === 1) {
      return
    }

    page--

    // this.setState({
    //   page
    // })

    hotelAction.getAll(page)

    this.props.history.push(`/?page=${page}`)
  }
  render () {
    let hotels = 'No Hotels Avaialble'
    if (this.state.hotels.length > 0) {
      hotels = this.state.hotels.map(hotel => (
        <div key={hotel.id}>
          <Link to={`/hotels/details/` + hotel.id}>
            {hotel.id} -
            {hotel.name}
          </Link>
        </div>
      ))
    }
    return (
      <div>
        <h1>All Hotels</h1>
        {hotels}
        <br />
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

export default ListHotelPage
