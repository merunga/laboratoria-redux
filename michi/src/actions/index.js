export const actionTypes = {
  SELECT: 'SELECT',
  RESET: 'RESET',
}

export const select = (x, y, turno) => ({
  type: actionTypes.SELECT,
  x,
  y,
  turno,
})

export const reset = () => ({
  type: actionTypes.RESET,
})
