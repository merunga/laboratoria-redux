import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as selectors from '../selectors'
import Component from '../components/Michi'
import {
  select as onSelect,
  reset as onReset,
} from '../actions'

const Michi = connect(
  state => ({
    michi: state.michi,
    turnoActual: selectors.turnoActual(state),
    ganador: selectors.ganador(state),
    jugadaGanadora: selectors.jugadaGanadora(state),
    empate: selectors.empate(state),
    // historia: state.historia,
  }),
  dispatch => bindActionCreators({ onSelect, onReset }, dispatch),
)(Component)

export default Michi
