import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import PetData from '../data/PetData'
import petAction from '../actions/PetActions'

class PetStore extends EventEmitter {
  create (pet) {
    PetData
      .create(pet)
      .then(data => this.emit(this.eventTypes.PET_CREATED, data))
  }
  getAll (page) {
    page = page || 1
    PetData
      .getAll(page)
      .then(data => this.emit(this.eventTypes.PETS_FETCHED, data))
  }
  getDetails (id) {
    PetData
      .getDetails(id)
      .then(data => this.emit(this.eventTypes.DETAILS_GOT, data))
  }
  createPost (id, comment) {
    PetData
      .createPost(id, comment)
      .then(data => this.emit(this.eventTypes.CREATE_PET, data))
  }
  getPosts(id) {
    PetData
      .getPosts(id)
      .then(data => this.emit(this.eventTypes.POSTS_GOT, data))
  }
  handleActions (action) {
    switch (action.type) {
      case petAction.types.CREATE_PET: {
        this.create(action.pet)
        break
      }
      case petAction.types.All_PETS: {
        this.getAll(action.page)
        break
      }
      case petAction.types.GET_DETAILS: {
        this.getDetails(action.id)
        break
      }
      case petAction.types.CREATE_POST: {
        this.createPost(action.id, action.comment)
        break
      }
      case petAction.types.GET_POSTS: {
        this.getPosts(action.id)
        break
      }
      default:
        break
    }
  }
}

let petStore = new PetStore()
petStore.eventTypes = {
  PET_CREATED: 'pet_created',
  PETS_FETCHED: 'pets_fetched',
  DETAILS_GOT: 'details_got',
  POST_CREATED: 'post_created',
  POSTS_GOT: 'posts_got'
}
dispatcher.register(petStore.handleActions.bind(petStore))
export default petStore
