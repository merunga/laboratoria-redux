import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Component from '../components/List'
import { prev as onPrev, next as onNext } from '../actions'

const List = connect(
  state => ({
    canciones: state.canciones.sort((c1, c2) => c1.votos <= c2.votos),
  }),
  dispatch => bindActionCreators({ onPrev, onNext }, dispatch),
)(Component)

export default List
