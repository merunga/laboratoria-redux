import { combineReducers } from 'redux'
import inState from './initialState'
import michi from './michi'

export const initialState = inState

export default combineReducers({
  michi,
})
