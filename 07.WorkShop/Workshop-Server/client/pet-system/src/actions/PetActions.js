import dispatcher from '../dispatcher'

const petActions = {
  types: {
    CREATE_PET: 'CREATE_PET',
    All_PETS: 'ALL_PETS',
    GET_DETAILS: 'GET_DETAILS',
    CREATE_POST: 'CREATE_POST'
  },
  create (pet) {
    dispatcher.dispatch({
      type: this.types.CREATE_PET,
      pet
    })
  },
  all (page) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.All_PETS,
      page
    })
  },
  getDetailsById (id) {
    dispatcher.dispatch({
      type: this.types.GET_DETAILS,
      id
    })
  },
  createPost (id, postText) {
    dispatcher.dispatch({
      type: this.types.CREATE_POST,
      id,
      postText
    })
  }
}

export default petActions
