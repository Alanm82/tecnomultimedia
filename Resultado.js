let estadoJuego = "jugando";
let ganar = false;
let perder = false;
let perdio = false;
function Resultado() {
  
  perder = !cuadradosObjetivo.some(([x, y]) => x === Horizontal && y === Vertical);
  ganar = cuadradosObjetivo.every(([x, y]) => Pisos[x][y]);
  if (ganar) {
    estadoJuego = "ganaste";
  } else if (perder && vida==0) {
    estadoJuego = "perdiste";
  }
  if (estadoJuego === "ganaste") {
    // mensaje de victoria
    image(imgText[4],width/2,500,700,300);
    image(imgText[5],width/2,800,350,200);
    image(imgText[6],width/2,900,350,150);
    Reiniciar();
  } else if (estadoJuego === "perdiste" && vida==0) {
    //mensaje de derrota
    Reiniciar();
    image(imgText[3],width/2,500,700,300);
    image(imgText[5],width/2,800,350,200);
    image(imgText[6],width/2,900,350,150);
  } else {
    // Continúa el juego 
  }
}
