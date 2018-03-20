import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Component from '../components/List'
import {
  upVote as onUpVote,
  downVote as onDownVote,
  select as onSelect,
} from '../actions'

const List = connect(
  state => ({
    canciones: state.canciones.sort((c1, c2) => c1.votos <= c2.votos),
  }),
  dispatch => bindActionCreators({ onUpVote, onDownVote, onSelect }, dispatch),
)(Component)

export default List
