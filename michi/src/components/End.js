import React from 'react';

const styles = {
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.7)',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    marginTop: 5,
  },
};

export default ({ winner, reset }) => (
  <div style={styles.root}>
    <div style={styles.inner}>
      <div>{winner ? `Ganó ${winner}` : 'Empate!'}</div>
      <button style={styles.button} onClick={reset}>
        Volver a empezar ↺
      </button>
    </div>
  </div>
)
