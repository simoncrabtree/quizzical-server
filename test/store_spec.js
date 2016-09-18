import makeStore from '../src/store'
import {expect} from 'chai'
import {SET_QUIZ} from '../src/actions'

describe('store', () => {
  it('is empty by default', () => {
    const store = makeStore()
    expect(store.getState()).to.deep.equal({})
  })

  it('SET_QUIZ', () => {
    const store = makeStore()
    store.dispatch({type: SET_QUIZ, quiz: {}})

    var state = store.getState()

    expect(state.quiz).to.deep.equal({})
  })
})