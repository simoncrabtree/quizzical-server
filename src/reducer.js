import {SET_QUIZ} from './actions'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUIZ:
      return Object.assign({}, state, {
        quiz: action.quiz
      })
  }
  return state
}