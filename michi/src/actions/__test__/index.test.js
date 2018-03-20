import * as actions from '../'

describe('actions', () => {
  it('selecciona casillas', () => {
    const row = [0, 1, 2]
    /* eslint-disable array-callback-return */
    row.map((i) => {
      row.map((j) => {
        expect(actions.select(i, j)).toMatchSnapshot()
      })
    })
    /* eslint-enable array-callback-return */
  })
  it('reinicia juego', () => {
    expect(actions.reset()).toMatchSnapshot()
  })
})
