import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import hotelAction from '../actions/HotelActions'
import HotelData from '../data/HotelData'

class HotelStore extends EventEmitter {
  create (hotel) {
    HotelData
      .create(hotel)
      .then(data => this.emit(this.eventTypes.HOTEL_CREATED, data))
  }
  handleAction (action) {
    switch (action.type) {
      case hotelAction.types.CREATE_HOTEL: {
        this.create(action.hotel)
        break
      }
      default:
        break
    }
  }
}

let hotelStore = new HotelStore()
hotelStore.eventTypes = {
  HOTEL_CREATED: 'hotel_created'
}
dispatcher.register(hotelStore.handleAction.bind(hotelStore))
export default hotelStore
