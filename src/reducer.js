import {SET_QUIZ, ASK_QUESTION} from './actions'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUIZ:
      return Object.assign({}, state, {
        quiz: action.quiz
      })

    case ASK_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: {
          text: 'How many...'
        }
      })
  }
  return state
}