import { connect } from 'react-redux'
import * as selectors from './selectors'
import Component from '../components/Header'
import {
  prev as prevActionCreator,
  next as nextActionCreator,
} from '../actions'

const Header = connect(
  state => ({
    seleccionado: selectors.seleccionado(state),
    canciones: selectors.canciones(state),
  }),
  dispatch => ({
    onPrev(canciones) {
      dispatch(prevActionCreator(canciones))
    },
    onNext(canciones) {
      dispatch(nextActionCreator(canciones))
    },
  }),
)(Component)

export default Header
