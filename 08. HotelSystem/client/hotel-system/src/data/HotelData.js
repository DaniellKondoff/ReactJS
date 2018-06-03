import Data from './Data'

const baseUrl = '/hotels'

class HotelData {
  static create (hotel) {
    return Data.post(`${baseUrl}/create`, hotel, true)
  }
}

export default HotelData
