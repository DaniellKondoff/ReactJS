import dispatcher from '../dispatcher'

const hotelActions = {
  types: {
    CREATE_HOTEL: 'CREATE_HOTEL',
    GET_ALL_HOTELS: 'GET_ALL_HOTELS',
    GET_BY_ID: 'GET_BY_ID',
    ADD_REVIEW: 'ADD_REVIEW',
    GET_ALLREVIEWS: 'GET_ALLREVIEWS'
  },
  createHotel (hotel) {
    dispatcher.dispatch({
      type: this.types.CREATE_HOTEL,
      hotel
    })
  },
  getAll (page) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.GET_ALL_HOTELS,
      page
    })
  },
  getById (id) {
    dispatcher.dispatch({
      type: this.types.GET_BY_ID,
      id
    })
  },
  addReview (id, review) {
    dispatcher.dispatch({
      type: this.types.ADD_REVIEW,
      id,
      review
    })
  },
  allReview (id) {
    dispatcher.dispatch({
      type: this.types.GET_ALLREVIEWS,
      id
    })
  }
}

export default hotelActions
