import Data from './Data'

const baseUrl = '/hotels'

class HotelData {
  static create (hotel) {
    return Data.post(`${baseUrl}/create`, hotel, true)
  }
  static getAll (page) {
    page = page || 1
    return Data.get(`${baseUrl}/all?page=${page}`)
  }
  static getById (id) {
    return Data.get(`${baseUrl}/details/${id}`, true)
  }
  static addReview(id, review) {
    return Data.post(`${baseUrl}/details/${id}/reviews/create`, review, true)
  }
  static getAllReviews(id) {
    return Data.get(`${baseUrl}/details/${id}/reviews`, true)
  }
}

export default HotelData
