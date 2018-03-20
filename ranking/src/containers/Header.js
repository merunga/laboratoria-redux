import { connect } from 'react-redux'
import Component from '../components/Header'
import {
  prev as prevActionCreator,
  next as nextActionCreator,
} from '../actions'

const Header = connect(
  state => ({
    seleccionado: state.canciones.find(c => c.id === state.seleccionado) || null,
  }),
  dispatch => ({
    onPrev() {
      dispatch(prevActionCreator())
    },
    onNext() {
      dispatch(nextActionCreator())
    },
  }),
)(Component)

export default Header
