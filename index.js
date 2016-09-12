import makeStore from './src/store'
import startServer from './src/server'
import { SET_QUIZ } from './src/actions'

const store = makeStore()
startServer(store)

store.dispatch({type: SET_QUIZ, quiz: {
  rounds: [
    {
      name: 'Round 1',
      questions: []
    }
  ]
}})
