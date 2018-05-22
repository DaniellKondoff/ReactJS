import Data from './Data'

const BaseUrl = '/pets'
class PetData {
  static create (pet) {
    return Data.post(`${BaseUrl}/create`, pet, true)
  }
}

export default PetData
