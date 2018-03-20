import * as actions from '../'

describe('actions', () => {
  it('crea action para upvote con id', () => {
    expect(actions.upVote(1)).toMatchSnapshot()
  })
  it('crea action para downVote con id', () => {
    expect(actions.upVote(2)).toMatchSnapshot()
  })
  it('crea action para prev', () => {
    expect(actions.prev()).toMatchSnapshot()
  })
  it('crea action para next', () => {
    expect(actions.next()).toMatchSnapshot()
  })
})