import React from 'react'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default ({ currPlayer, reset }) => (
  <div style={styles.root}>
    <span>Turno de: {currPlayer}</span>
    <button onClick={reset}>↺</button>
  </div>
)
