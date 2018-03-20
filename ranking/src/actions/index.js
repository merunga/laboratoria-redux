export const actionTypes = {
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
  PREV: 'PREV',
  NEXT: 'NEXT',
}

export const upVote = id => ({
  type: actionTypes.UP_VOTE,
  id,
})

export const downVote = id => ({
  type: actionTypes.DOWN_VOTE,
  id,
})

export const prev = () => ({
  type: actionTypes.PREV,
})

export const next = () => ({
  type: actionTypes.NEXT,
})
