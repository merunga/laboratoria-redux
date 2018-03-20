import React from 'react'
import PropTypes from 'prop-types'

const List = ({ canciones, onUpVote, onDownVote }) => (
  <ul>
    {canciones.map(c => (
      <li key={c.id}>
        <span>{c.titulo}</span>
        <b>{c.votos}</b>
        <button onClick={onUpVote}>+</button>
        <button onClick={onDownVote}>-</button>
      </li>
    ))}
  </ul>
)

List.propTypes = {
  canciones: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
}

export default List
