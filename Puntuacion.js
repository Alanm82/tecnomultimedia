function calcPunt() {
  // Inicializa la puntuación
   puntuacion = 0;

  // Recorre la matriz Pisos y suma puntos por cada piso objetivo vuelto en true
  for (let i = 0; i < Pisos.length; i++) {
    for (let j = 0; j < Pisos[i].length; j++) {
      if (Pisos[i][j]) {
        puntuacion += 20;
      }
    }
  }
// Devuelve la puntuación
  return puntuacion;
}
