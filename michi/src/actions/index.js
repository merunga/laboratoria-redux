export const actionTypes = {
  SELECT: 'SELECT',
  RESET: 'RESET',
}

export const select = (x, y) => ({
  type: actionTypes.SELECT,
  x,
  y,
})

export const reset = () => ({
  type: actionTypes.RESET,
})
