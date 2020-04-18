import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveQuestions, addAnswerToQuestion, addQuestion } from './questions'
import { receiveUsers, addAnswerToUser, addQuestionToUser } from './users'

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}

export function saveAnswer(authUser, qid, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authUser, qid, answer))
    dispatch(addAnswerToQuestion(authUser, qid, answer))
    return saveQuestionAnswer(authUser, qid, answer)
      .catch(e => {
        console.warn('Error in saving user answer:', e)
      })
  }
}

export function postQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author })
      .then(question => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToUser(question))
      })
  }
}