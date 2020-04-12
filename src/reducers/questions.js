import { RECEIVE_QUESTIONS } from '../actions/questions'

const initState = {
  questions: []
}

const users = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      }
    default:
      return state
  }
}

export default users