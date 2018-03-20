export const canciones = state => state.canciones.sort((c1, c2) => c1.votos <= c2.votos)

export const seleccionado = state => state.canciones.find(c => c.id === state.seleccionado) || null
