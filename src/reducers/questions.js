export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export default function receiveUsers(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}