import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as selectors from '../selectors'
import Component from '../components/Header'
import { reset as onReset } from '../actions'

const Header = connect(
  state => ({
    turnoActual: selectors.turnoActual(state),
    // turnosCount: selectors.turnoCount(state),
  }),
  dispatch => bindActionCreators({ onReset }, dispatch),
)(Component)

export default Header
