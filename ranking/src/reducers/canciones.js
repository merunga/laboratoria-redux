import { actionTypes } from '../actions'

export default (state, action) => {
  if (action.type === actionTypes.UP_VOTE) {
    return state.map(c => (c.id === action.id ? { ...c, votos: c.votos + 1 } : c))
  }
  if (action.type === actionTypes.DOWN_VOTE) {
    return state.map(c => (
      c.id === action.id ? { ...c, votos: (c.votos > 0 ? c.votos - 1 : 0) } : c
    ))
  }
  return state || null
}
