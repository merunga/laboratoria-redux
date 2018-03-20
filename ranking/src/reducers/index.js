import { combineReducers } from 'redux'
export const initialState = {
  initialValue: 0,
}

export default combineReducers({
  initialValue: (state = 3) => state,
  secondValue: () => 2
})

