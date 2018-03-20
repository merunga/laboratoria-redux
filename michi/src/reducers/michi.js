import { actionTypes } from '../actions'
import initialState from './initialState'

export default (state, action) => {
  if (action.type === actionTypes.SELECT) {
    const { x, y, turno } = action
    const michi = [
      [...state[0]],
      [...state[1]],
      [...state[2]],
    ]
    michi[x][y] = turno
    return michi
  }
  if (action.type === actionTypes.RESET) {
    const { michi } = initialState
    return [
      [...michi[0]],
      [...michi[1]],
      [...michi[2]],
    ]
  }
  return state || null
}
