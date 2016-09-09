export default function reducer(state, action) {
  console.log(action)
  return {
    quiz: action.quiz
  }
}