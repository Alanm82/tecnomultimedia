function Direccion() {
  // Calcular la diferencia en coordenadas entre la posición actual y la anterior
  difX = posxInicial - posxAnterior;
  difY = posyInicial - posyAnterior;

  // Determinar la dirección basada en las diferencias en coordenadas
  if (difX > 0 && difY > 0) {
    return 0;  //"Diagonal Inferior Derecha"
  } else if (difX > 0 && difY < 0) {
    return 2;  //"Diagonal Superior Derecha";
  } else if (difX < 0 && difY > 0) {
    return 1; //"Diagonal Inferior Izquierda";
  } else if (difX < 0 && difY < 0) {
    return 3; //"Diagonal Superior Izquierda";
  } else {
    return 0;
  }
}
