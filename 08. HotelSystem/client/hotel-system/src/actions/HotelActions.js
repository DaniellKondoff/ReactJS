import dispatcher from '../dispatcher'

const hotelActions = {
  types: {
    CREATE_HOTEL: 'CREATE_HOTEL',
    GET_ALL_HOTELS: 'GET_ALL_HOTELS'
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
  }
}

export default hotelActions
