export function setQuestions(state, quiz) {
  return Object.assign({}, state, {
    quiz: quiz
  })
}

export function askQuestion(state) {
  console.log(state)
  return Object.assign({}, state, {
    nextQuestion: state.quiz.rounds[0].questions[0]
  })
}