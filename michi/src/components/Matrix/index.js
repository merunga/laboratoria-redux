import React from 'react'
import MatrixRow from './MatrixRow'

const styles = {
  matrix: {
    display: 'flex',
    width: 300,
    height: 300,
    marginTop: 10,
  },
}

export default ({
  michi, select, turnoActual, jugadaGanadora,
}) => (
  <div style={styles.matrix}>
    {michi.map((row, x) => (
      <MatrixRow
        key={`row-${x}`}
        row={row}
        x={x}
        onClick={(x, y) => () => select(x, y, turnoActual)}
        winnerCombination={jugadaGanadora}
      />
    ))}
  </div>
)
