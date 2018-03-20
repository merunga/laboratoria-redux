import { combineReducers } from 'redux'

export const initialState = {
  canciones: [
    {
      id: 1, titulo: 'Psycho', autor: 'Post Malone', votos: 70,
    },
    {
      id: 2, titulo: 'Perfect', autor: 'Ed Sheeran', votos: 90,
    },
    {
      id: 3, titulo: 'God\'s Plan', autor: 'Drake', votos: 100,
    },
    {
      id: 4, titulo: 'Finesse', autor: 'Bruno Mars', votos: 80,
    },
    {
      id: 5, titulo: 'Meant To Be', autor: 'Bebe Rexha & Florida Georgia Line', votos: 60,
    },
  ],
  seleccionado: 1,
}

export default combineReducers({
  canciones: (state = initialState.canciones) => state,
  seleccionado: (state = initialState.seleccionado) => state,
})
