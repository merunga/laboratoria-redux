export const actionTypes = {
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
  PREV: 'PREV',
  NEXT: 'NEXT',
  SELECT: 'SELECT',
}

export const upVote = id => ({
  type: actionTypes.UP_VOTE,
  id,
})

export const downVote = id => ({
  type: actionTypes.DOWN_VOTE,
  id,
})

export const select = id => ({
  type: actionTypes.SELECT,
  id,
})

export const prev = () => ({
  type: actionTypes.PREV,
})

export const next = () => ({
  type: actionTypes.NEXT,
})
