import React from 'react'
import PropTypes from 'prop-types'

const Header = ({
  seleccionado, canciones, onPrev, onNext,
}) => (
  <div>
    <button onClick={() => onPrev(canciones)}>&lt;</button>
    <div>
      {seleccionado.titulo}
    </div>
    <button onClick={() => onNext(canciones)}>&gt;</button>
  </div>
)

Header.propTypes = {
  seleccionado: PropTypes.object.isRequired,
  canciones: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default Header
