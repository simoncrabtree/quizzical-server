import {SET_QUIZ, ASK_QUESTION} from './actions'
import {sendMessage} from './server'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUIZ:
      return Object.assign({}, state, {
        quiz: action.quiz,
        currentRoundNumber: 0,
        currentQuestionNumber: 0
      })

    case ASK_QUESTION:
      console.log('ASK_QUESTION')
      sendMessage('action', {type: 'QUESTION_ASKED', question: state.quiz.rounds[state.currentRoundNumber].questions[state.currentQuestionNumber]})

      return state
  }
  return state
}