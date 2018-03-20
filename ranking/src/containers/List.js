import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as selectors from './selectors'
import Component from '../components/List'
import {
  upVote as onUpVote,
  downVote as onDownVote,
  select as onSelect,
} from '../actions'

const List = connect(
  state => ({
    canciones: selectors.canciones(state),
  }),
  dispatch => bindActionCreators({ onUpVote, onDownVote, onSelect }, dispatch),
)(Component)

export default List
