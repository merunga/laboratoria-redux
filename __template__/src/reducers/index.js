import { combineReducers } from 'redux'
export const initialState = {
  initialValue: 0,
}

export default combineReducers({
  secondValue: (state, action) => 2,
})
