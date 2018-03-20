import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as selectors from '../selectors'
import Component from '../components/Matrix'
import { select } from '../actions'

const Matrix = connect(
  state => ({
    michi: state.michi,
    turnoActual: selectors.turnoActual(state),
    jugadaGanadora: selectors.jugadaGanadora(state),
    // historia: state.historia,
  }),
  dispatch => bindActionCreators({ select }, dispatch),
)(Component)

export default Matrix
