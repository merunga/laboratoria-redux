import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as selectors from '../selectors'
import Component from '../components/InfoBar'
import { reset } from '../actions'

const InfoBar = connect(
  state => ({
    currPlayer: selectors.turnoActual(state),
    // turnosCount: selectors.turnoCount(state),
  }),
  dispatch => bindActionCreators({ reset }, dispatch),
)(Component)

export default InfoBar
