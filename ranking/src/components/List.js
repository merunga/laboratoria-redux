import React from 'react'
import PropTypes from 'prop-types'

const List = ({ canciones, onUpVote, onDownVote, onSelect }) => (
  <ul>
    {canciones.map(c => (
      <li key={c.id}>
        <span onClick={() => onSelect(c.id)}>{c.titulo}</span>
        <b>{c.votos}</b>
        <button onClick={() => onUpVote(c.id)}>+</button>
        <button onClick={() => onDownVote(c.id)}>-</button>
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
