import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveQuestions, addAnswerToQuestion } from './questions'
import { receiveUsers, addAnswerToUser } from './users'

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}

export function saveUserAnswer(authUser, qid, answer, pushRoute) {
  return dispatch => {
    dispatch(addAnswerToUser(authUser, qid, answer))
    dispatch(addAnswerToQuestion(authUser, qid, answer))
    return saveQuestionAnswer(authUser, qid, answer)
      .then(() => pushRoute())
      .catch(e => {
        console.warn('Error in saving user answer:', e)
      })
  }
}