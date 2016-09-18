import {expect} from 'chai'

import {SET_QUIZ} from '../src/actions'
import reducer from '../src/reducer.js'

describe('SET_QUIZ', () => {
  const nextState = reducer({}, {
    type: SET_QUIZ, 
    quiz: {
      rounds: []
    }
  })

  it('adds the quiz to the state', () => {
    expect(nextState).to.deep.equal({
      currentRoundNumber: 0,
      currentQuestionNumber: 0,
      quiz: {
        rounds: []
      }
    })
  })
})
