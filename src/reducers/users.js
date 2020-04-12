import {
  RECEIVE_USERS,
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER
} from '../actions/users'

const initState = {
  users: []
}

const users = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}

export default users