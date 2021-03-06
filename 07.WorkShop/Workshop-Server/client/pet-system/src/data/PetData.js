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
  static getDetails (id) {
    return Data.get(`${BaseUrl}/details/${id}`, true)
  }
  static createPost (id, comment) {
    return Data.post(`${BaseUrl}/details/${id}/comments/create`, comment, true)
  }
  static getPosts (id) {
    return Data.get(`${BaseUrl}/details/${id}/comments`, true)
  }
}

export default PetData
