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
  getAll (page) {
    page = page || 1
    HotelData
      .getAll(page)
      .then(data => this.emit(this.eventTypes.ALL_HOTELS_GOT, data))
  }
  getById (id) {
    HotelData
      .getById(id)
      .then(data => this.emit(this.eventTypes.HOTEL_GOT, data))
  }
  handleAction (action) {
    switch (action.type) {
      case hotelAction.types.CREATE_HOTEL: {
        this.create(action.hotel)
        break
      }
      case hotelAction.types.GET_ALL_HOTELS: {
        this.getAll(action.page)
        break
      }
      case hotelAction.types.GET_BY_ID: {
        this.getById(action.id)
        break
      }
      default:
        break
    }
  }
}

let hotelStore = new HotelStore()
hotelStore.eventTypes = {
  HOTEL_CREATED: 'hotel_created',
  ALL_HOTELS_GOT: 'all_hotels_got',
  HOTEL_GOT: 'hotel_got'
}
dispatcher.register(hotelStore.handleAction.bind(hotelStore))
export default hotelStore
