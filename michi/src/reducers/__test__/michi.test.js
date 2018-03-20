import initialState from '../initialState'
import michi from '../michi'
import * as actions from '../../actions'

describe('michi', () => {
  it('seleccion', () => {
    const row = [0, 1, 2]
    /* eslint-disable array-callback-return */
    row.map((i) => {
      row.map((j) => {
        expect(michi(initialState.michi, actions.select(i, j, 'X'))).toMatchSnapshot()
      })
    })
    /* eslint-enable array-callback-return */
  })
  it('reset', () => {
    expect(michi(initialState.michi, actions.reset())).toMatchSnapshot()
  })
})
