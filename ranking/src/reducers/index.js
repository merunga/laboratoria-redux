import { combineReducers } from 'redux'
import inState from './initialState'
import canciones from './canciones'
import seleccionado from './seleccionado'

export const initialState = inState

export default combineReducers({
  canciones,
  seleccionado,
})
