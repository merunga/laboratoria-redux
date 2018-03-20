import * as selectors from '../selectors'
import { initialState } from '../../reducers'

describe('selectors', () => {
  it('canciones', () => {
    expect(selectors.canciones(initialState)).toMatchSnapshot()
  })
  it('seleccionado', () => {
    expect(selectors.seleccionado(initialState)).toMatchSnapshot()
  })
})
