import { connect } from 'react-redux'
import * as selectors from '../selectors'
import Component from '../components/App'

const End = connect(
  state => ({
    juegoTerminado: selectors.juegoTerminado(state),
  }),
)(Component)

export default End
