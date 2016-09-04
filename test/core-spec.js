import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {setEntries, setQuestions} from '../src/core';

describe('application logic', () => {

  describe('setQuestions', () => {

    it('adds the rounds and questions to the state', () => {
      const state = {}
      const quiz = {
        rounds: [{
          questions: [
            {text: "How many..."},
            {text: "In which year did..."}
          ]
        }]
      }

      const nextState = setQuestions(state, quiz);

      expect(nextState.quiz.rounds.length).to.equal(1)
      expect(nextState.quiz.rounds[0].questions.length).to.equal(2)
      expect(nextState.quiz.rounds[0].questions[0].text).to.equal("How many...")
      expect(nextState.quiz.rounds[0].questions[1].text).to.equal("In which year did...")
    });
  });
});