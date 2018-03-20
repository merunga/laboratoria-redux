import initialState from '../initialState'
import canciones from '../canciones'
import * as actions from '../../actions'

describe('canciones', () => {
  it('upvotea', () => {
    expect(canciones(initialState.canciones, actions.upVote(1))).toMatchSnapshot()
  })
  it('downvotea', () => {
    expect(canciones(initialState.canciones, actions.downVote(5))).toMatchSnapshot()
  })
})
