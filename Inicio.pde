void inicio() {
  rectMode(CENTER);
  textSize(30);
  textAlign(CENTER, CENTER);

  int x = 300;
  int alto = 100;
  int y = 500;

  // Calcular el ancho del rectángulo basado en la longitud del texto más 20 píxeles adicionales
  float ancho = textWidth("Inicio") + 20;

  fill(0);
  rect(x, y, ancho, alto);
  fill(255);
  text("Inicio", x, y - 5);

  if (Estado == 16 || Estado == 15 || Estado == 13 || Estado == 14) {
    if (zona(x, y, int(ancho), alto)) {
      Estado = 0;
    }
  }
}
