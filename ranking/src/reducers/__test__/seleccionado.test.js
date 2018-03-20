import initialState from '../initialState'
import seleccionado from '../seleccionado'
import * as actions from '../../actions'
import * as selectors from '../../containers/selectors'

const canciones = selectors.canciones(initialState)

describe('seleccionado', () => {
  it('prev', () => {
    expect(seleccionado(initialState.seleccionado, actions.prev(canciones))).toMatchSnapshot()
  })
  it('next', () => {
    expect(seleccionado(initialState.seleccionado, actions.next(canciones))).toMatchSnapshot()
  })
  it('select', () => {
    expect(seleccionado(initialState.seleccionado, actions.select(5, canciones))).toMatchSnapshot()
  })
})
