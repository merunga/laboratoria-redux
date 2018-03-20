import React from 'react'
import PropTypes from 'prop-types'


/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

const List = ({
  canciones, onUpVote, onDownVote, onSelect,
}) => (
  <ul>
    {canciones.map(c => (
      <li key={c.id}>
        <span onClick={() => onSelect(c.id)}>{c.titulo}</span>
        <b>{c.votos}</b>
        <button onClick={() => onUpVote(c.id)}>+</button>
        <button onClick={() => onDownVote(c.id)} disabled={c.votos === 0}>-</button>
      </li>
    ))}
  </ul>
)

List.propTypes = {
  canciones: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default List
