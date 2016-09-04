import {expect} from 'chai'
import {List} from 'immutable'

describe('smoke test', () => {
	it('passes', () => {
		expect(true).to.equal(true)
	})
})

describe('Immutable List', () => {
  it('is immutable', () => {
    let state = List.of('A','B')
    let nextState = state.push('C')

    expect(state).to.equal(List.of('A','B'))
    expect(nextState).to.equal(List.of('A','B','C'))
  })
})