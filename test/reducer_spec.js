import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {setQuestions, askQuestion} from '../src/core';
import reducer from '../src/reducer.js'

describe('reducer', () => {

  it('can reduce actions', () => {
    const state = {}
    const action = {
      type: 'SET_QUESTIONS',
      quiz: {
        rounds: [{
          questions: [
            {text: "How many..."},
            {text: "In which year did..."}
          ]
        }]
      }
    }

    const nextState = reducer(state, action)

    expect(nextState.quiz.rounds[0].questions[0].text).to.equal("How many...")
  })
});