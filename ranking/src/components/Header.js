import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ seleccionado, onPrev, onNext }) => (
  <div>
    <button onClick={onPrev}>&lt;</button>
    <div>
      {seleccionado.titulo}
    </div>
    <button onClick={onNext}>&gt;</button>
  </div>
)

Header.propTypes = {
  seleccionado: PropTypes.object.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default Header
