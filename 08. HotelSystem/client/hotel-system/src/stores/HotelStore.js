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
  addReview (id, review) {
    HotelData
      .addReview(id, review)
      .then(data => this.emit(this.eventTypes.REVIEW_CREATED, data))
  }
  getAllReviews (id) {
    HotelData
      .getAllReviews(id)
      .then(data => this.emit(this.eventTypes.ALL_REVIEWS_GOT, data))
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
      case hotelAction.types.ADD_REVIEW: {
        this.addReview(action.id, action.review)
        break
      }
      case hotelAction.types.GET_ALLREVIEWS: {
        this.getAllReviews(action.id)
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
  HOTEL_GOT: 'hotel_got',
  REVIEW_CREATED: 'review_created',
  ALL_REVIEWS_GOT: 'all_reviews_got'
}
dispatcher.register(hotelStore.handleAction.bind(hotelStore))
export default hotelStore
