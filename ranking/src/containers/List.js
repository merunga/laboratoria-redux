import { connect } from 'react-redux'
import Component from '../components/List'

const List = connect(
  state => ({
    canciones: state.canciones.sort((c1, c2) => c1.votos <= c2.votos),
  }),
  // mapDispatchToProps
)(Component)

export default List
