import Data from './Data'

const BaseUrl = '/pets'
class PetData {
  static create (pet) {
    return Data.post(`${BaseUrl}/create`, pet, true)
  }
  static getAll (page) {
    page = page || 1
    return Data.get(`${BaseUrl}/all?page=${page}`)
  }
}

export default PetData
