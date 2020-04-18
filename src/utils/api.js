import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA'

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  )
}

export function saveQuestionAnswer(authUser, qid, answer) {
  console.log('info', { authUser, qid, answer })
  return _saveQuestionAnswer({ authedUser: authUser, qid, answer })
}

export function saveQuestion(question) {
  console.log(question)
  // return _saveQuestion(question)
}