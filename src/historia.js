const personajes = ["un astronauta", "un detective", "un pirata"];
const acciones = ["exploraba", "investigaba", "navegaba"];
const lugares = ["la Luna", "una mansión", "el océano"];
const conflictos = ["encontró un misterio", "perdió su mapa", "vio una sombra"];
const resoluciones = ["descubrió un tesoro", "resolvió el caso", "escapó por poco"];

function generarHistoria(personajeUsuario) {
  const personaje = personajeUsuario || personajes[Math.floor(Math.random() * personajes.length)];
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const lugar = lugares[Math.floor(Math.random() * lugares.length)];
  const conflicto = conflictos[Math.floor(Math.random() * conflictos.length)];
  const resolucion = resoluciones[Math.floor(Math.random() * resoluciones.length)];

  return `${personaje} ${accion} en ${lugar}, pero ${conflicto}. Al final, ${resolucion}.`;
}

export default generarHistoria;