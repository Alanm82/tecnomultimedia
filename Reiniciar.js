function Reiniciar() {
  if (Restart==true) {
    for (let i = 0; i < Pisos.length; i++) {
      for (let j = 0; j < Pisos[i].length; j++) {
        Pisos[i][j] = false;
        estadoJuego = "jugando";
        Horizontal=2;
        Vertical=0;
        Restart=false;
        vida=3;
      }
    }
  }
}
