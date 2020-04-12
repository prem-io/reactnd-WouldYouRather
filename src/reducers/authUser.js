import { SET_AUTH_USER } from '../actions/authUser'

const authUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id
    default:
      return state
  }
}

export default authUser