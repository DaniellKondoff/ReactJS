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
  handleActions (action) {
    switch (action.type) {
      case petAction.types.CREATE_PET: {
        this.create(action.pet)
        break
      }
      default:
        break
    }
  }
}

let petStore = new PetStore()
petStore.eventTypes = {
  PET_CREATED: 'pet_created'
}
dispatcher.register(petStore.handleActions.bind(petStore))
export default petStore
