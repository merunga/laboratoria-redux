import { connect } from 'react-redux'
import Component from '../components/Header'

const Header = connect(
  state => ({
    seleccionado: state.canciones.find(c => c.id === state.seleccionado) || null,
  }),
  // mapDispatchToProps
)(Component)

export default Header
