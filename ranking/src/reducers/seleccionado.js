import { actionTypes } from '../actions'

export default (state, action) => {
  switch (action.type) {
    case actionTypes.PREV:
    case actionTypes.NEXT: {
      const { canciones } = action
      const seleccionado = canciones.find(c => c.id === state) || null
      let selIdx = canciones.indexOf(seleccionado)
      switch (action.type) {
        case actionTypes.PREV:
          selIdx = selIdx > 0 ? selIdx - 1 : canciones.length - 1
          break
        case actionTypes.NEXT:
          selIdx = selIdx < canciones.length - 1 ? selIdx + 1 : 0
          break
        default:
          break
      }
      return canciones[selIdx].id
    }
    case actionTypes.SELECT:
      return action.id
    default:
      break
  }
  return state || null
}
