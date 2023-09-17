let velocidad = 7;

function personaje() {
  if (i === Horizontal && j === Vertical && j % 2 === 0) {
    fill(150);
    image(imgs[Direccion()], posxInicial, posyInicial, 100, 100);
    // Calcular la distancia entre la posición actual y el objetivo
    let distancia = dist(posxInicial, posyInicial, posxBert, posyBert);

    if (distancia > velocidad) {
      // Si la distancia es mayor que la velocidad, moverse hacia el objetivo
      let obtenerAngulo = atan2(posyBert - posyInicial, posxBert - posxInicial);
      posxInicial += velocidad * cos(obtenerAngulo);
      posyInicial += velocidad * sin(obtenerAngulo);
      Reposo=false;
    } else {
      // Si la distancia es menor que la velocidad, llegar al objetivo
      posxInicial = posxBert;
      posyInicial = posyBert;
      Reposo=true;

      // Marcar el cuadro como objetivo alcanzado
      if (cuadradosObjetivo.some(([x, y]) => x === i && y === j)) {
        Pisos[i][j] = true;
      }
    }
  } else if (i === Horizontal && j === Vertical && j % 2 === 1) {
    fill(150);
    image(imgs[Direccion()], posxInicial, posyInicial, 100, 100);

    // Calcular la distancia entre la posición actual y el objetivo
    let distancia = dist(posxInicial, posyInicial, posxdiagBert, posyBert);

    if (distancia > velocidad) {
      // Si la distancia es mayor que la velocidad, moverse hacia el objetivo
      let obtenerAngulo = atan2(posyBert - posyInicial, posxdiagBert - posxInicial);
      posxInicial += velocidad * cos(obtenerAngulo);
      posyInicial += velocidad * sin(obtenerAngulo);
      Reposo=false;
    } else {
      // Si la distancia es menor que la velocidad, llegar al objetivo
      posxInicial = posxdiagBert;
      posyInicial = posyBert;
      Reposo=true;

      // Marcar el cuadro como objetivo alcanzado
      if (cuadradosObjetivo.some(([x, y]) => x === i && y === j)) {
        Pisos[i][j] = true;
      }
    }
  }
  // Actualizar la posición anterior
  if(posicionado()==true){
   posxAnterior = posxInicial;
   }
   if(posicionado()==true){
   posyAnterior = posyInicial;
   }
  resetPos();
}
