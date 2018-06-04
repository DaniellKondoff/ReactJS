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
}

export default HotelData
