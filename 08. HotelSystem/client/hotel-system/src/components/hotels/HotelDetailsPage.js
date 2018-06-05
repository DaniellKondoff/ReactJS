import React, { Component } from 'react'
import hotelAction from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'

class HotelDetailsPage extends Component {
    constructor (props){
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
    componentDidMount () {
        //hotelAction.getById(this.state.id)
    }
    componentWillUnmount () {
        hotelStore.removeListener(
            hotelStore.eventTypes.HOTEL_GOT,
            this.handleHotelDetailsFetched
        )
    }
    handleHotelDetailsFetched (data) {
        this.setState({
            hotel: data
        })
    }
    render() {
        return (
            <div>
                <h1>Hotel Details {this.state.id}</h1>
            </div>
        )
    }
}

export default HotelDetailsPage
