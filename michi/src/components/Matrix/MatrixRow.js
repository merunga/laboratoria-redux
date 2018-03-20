import React from 'react'

const styles = isWinnerCombination => ({
  cell: {
    width: 98,
    height: 98,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #333',
    background: (isWinnerCombination) ? 'lime' : '#222',
    color: (isWinnerCombination) ? '#222' : 'lime',
  },
})

export default ({
  row, x, onClick, winnerCombination,
}) => (
  <div>
    {row.map((value, y) => (
      <div
        style={
          styles(
            winnerCombination
            && !!winnerCombination.find(coords => coords.x === x && coords.y === y),
          ).cell
        }
        key={`cell-${x}-${y}`}
        onClick={onClick(x, y)}
      >{value}
      </div>
    ))}
  </div>
)
