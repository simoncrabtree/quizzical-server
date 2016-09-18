import makeStore from './src/store'
import startServer from './src/server'
import { SET_QUIZ } from './src/actions'

const store = makeStore()
startServer(store)

store.dispatch({type: SET_QUIZ, quiz: {
  rounds: [
    {
      name: 'Round 1',
      questions: [
        {
          question: 'How many times have Manchester United won the European Cup or Champions League?',
          answer: '3'
        },
        {
          question: 'When was the first email sent?',
          options: {
            a: '1971',
            b: '1981',
            c: '1991',
            d: '2001'
          },
          answer: 'a'
        }
      ]
    }
  ]
}})
