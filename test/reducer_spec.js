import {expect} from 'chai'

import {SET_QUIZ} from '../src/actions'
import reducer from '../src/reducer.js'

describe('SET_QUIZ', () => {
  it('adds the quiz to the state', () => {
    const nextState = reducer({}, {
      type: SET_QUIZ, 
      quiz: {
        rounds: []
      }
    })

    expect(nextState).to.deep.equal({
      quiz: {
        rounds: []
      }
    })
  })
})