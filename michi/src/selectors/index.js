const countCells = (michi) => {
  const accum = {
    X: 0,
    O: 0,
    [null]: 0,
  }
  const row = [0, 1, 2]
  /* eslint-disable array-callback-return */
  row.map((i) => {
    row.map((j) => {
      const value = michi[i][j]
      accum[value] += 1
    })
  })
  /* eslint-enable array-callback-return */
  return accum
}

export const turnoActual = ({ michi }) => {
  const accum = countCells(michi)
  return accum.X > accum.O ? 'O' : 'X'
}

const ganadoFila = (michi) => {
  for (let i = 0; i < 3; i += 1) {
    if (michi[i][0] && michi[i][0] === michi[i][1] && michi[i][0] === michi[i][2]) {
      return {
        jugador: michi[i][0],
        jugada: [
          { x: i, y: 0 },
          { x: i, y: 1 },
          { x: i, y: 2 },
        ],
      }
    }
  }
  return { jugador: null, jugada: null }
}

const ganadorColumna = (michi) => {
  for (let j = 0; j < 3; j += 1) {
    if (michi[0][j] && michi[0][j] === michi[1][j] && michi[0][j] === michi[2][j]) {
      return {
        jugador: michi[0][j],
        jugada: [
          { x: 0, y: j },
          { x: 1, y: j },
          { x: 2, y: j },
        ],
      }
    }
  }
  return { jugador: null, jugada: null }
}

const ganadorDiagonal = (michi) => {
  if (michi[0][0] && michi[0][0] === michi[1][1] && michi[0][0] === michi[2][2]) {
    return {
      jugador: michi[0][0],
      jugada: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ],
    }
  }
  if (michi[2][0] && michi[2][0] === michi[1][1] && michi[2][0] === michi[0][2]) {
    return {
      jugador: michi[2][0],
      jugada: [
        { x: 2, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 2 },
      ],
    }
  }
  return { jugador: null, jugada: null }
}

export const ganador = ({ michi }) => (
  ganadoFila(michi).jugador ||
  ganadorColumna(michi).jugador ||
  ganadorDiagonal(michi).jugador
)

export const empate = ({ michi }) => {
  if (ganador({ michi })) {
    return false
  }
  return countCells(michi).null === 0
}

export const juegoTerminado = ({ michi }) => !!(ganador({ michi }) || empate({ michi }))

export const jugadaGanadora = ({ michi }) => (
  ganadoFila(michi).jugada ||
  ganadorColumna(michi).jugada ||
  ganadorDiagonal(michi).jugada
)

// export const turnoCount = ({ michi }) => 0
