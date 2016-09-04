export function setQuestions(state, quiz) {
  return Object.assign({}, state, {
    quiz: quiz
  })
}