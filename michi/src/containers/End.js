import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as selectors from '../selectors'
import Component from '../components/End'
import { reset } from '../actions'

const End = connect(
  state => ({
    winner: selectors.ganador(state),
  }),
  dispatch => bindActionCreators({ reset }, dispatch),
)(Component)

export default End
