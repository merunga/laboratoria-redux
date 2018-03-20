import * as selectors from '../'
// import { initialState } from '../../reducers'

const nil = null

describe('selectors', () => {
  it('turnoActual', () => {
    expect(selectors.turnoActual({
      michi: [
        ['X', 'O', 'X'],
        [nil, nil, nil],
        [nil, nil, nil],
      ],
    })).toBe('O')
    expect(selectors.turnoActual({
      michi: [
        ['X', 'O', 'X'],
        ['O', nil, nil],
        [nil, nil, nil],
      ],
    })).toBe('X')
  })
  it('ganador', () => {
    expect(selectors.ganador({
      michi: [
        ['X', 'O', 'X'],
        ['O', nil, nil],
        [nil, nil, nil],
      ],
    })).toBe(null)
    expect(selectors.ganador({
      michi: [
        ['X', 'X', 'X'],
        ['O', nil, nil],
        ['O', nil, nil],
      ],
    })).toBe('X')
    expect(selectors.ganador({
      michi: [
        ['X', 'O', 'O'],
        ['X', nil, nil],
        ['X', nil, nil],
      ],
    })).toBe('X')
    expect(selectors.ganador({
      michi: [
        ['X', 'O', 'O'],
        [nil, 'X', nil],
        [nil, nil, 'X'],
      ],
    })).toBe('X')
    expect(selectors.ganador({
      michi: [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['O', 'X', '0'],
      ],
    })).toBe(null)
  })
  it('empate', () => {
    expect(selectors.empate({
      michi: [
        [nil, nil, nil],
        [nil, nil, nil],
        [nil, nil, nil],
      ],
    })).toBe(false)
    expect(selectors.empate({
      michi: [
        ['X', 'O', 'X'],
        ['O', nil, nil],
        [nil, nil, nil],
      ],
    })).toBe(false)
    expect(selectors.empate({
      michi: [
        ['X', 'O', 'O'],
        [nil, 'X', nil],
        [nil, nil, 'X'],
      ],
    })).toBe(false)
    expect(selectors.empate({
      michi: [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
      ],
    })).toBe(true)
  })
  it('juegoTerminado', () => {
    expect(selectors.juegoTerminado({
      michi: [
        ['X', 'O', 'X'],
        ['O', nil, nil],
        [nil, nil, nil],
      ],
    })).toBe(false)
    expect(selectors.juegoTerminado({
      michi: [
        ['X', 'X', 'X'],
        ['O', nil, nil],
        ['O', nil, nil],
      ],
    })).toBe(true)
    expect(selectors.juegoTerminado({
      michi: [
        ['X', 'O', 'O'],
        [nil, 'X', nil],
        [nil, nil, 'X'],
      ],
    })).toBe(true)
    expect(selectors.juegoTerminado({
      michi: [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
      ],
    })).toBe(true)
  })
  it('jugadaGanadora', () => {
    expect(selectors.jugadaGanadora({
      michi: [
        ['X', 'X', 'X'],
        ['O', nil, nil],
        ['O', nil, nil],
      ],
    })).toMatchObject([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ])
    expect(selectors.jugadaGanadora({
      michi: [
        ['X', 'O', 'O'],
        ['X', nil, nil],
        ['X', nil, nil],
      ],
    })).toMatchObject([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ])
    expect(selectors.jugadaGanadora({
      michi: [
        ['X', 'O', 'O'],
        [nil, 'X', nil],
        [nil, nil, 'X'],
      ],
    })).toMatchObject([
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ])
  })
})
