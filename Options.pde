void Options(int x, int y, int ancho, int alto) {
  rectMode(CENTER);
  textSize(20);
  textAlign(CENTER, CENTER);

  for (int i = 1; i <= 2; i++) {
    int offsetY = y - (60 * i);

    fill(0);
    rect(x, offsetY, ancho, alto);
    fill(255);
    
    // Botón con final bueno
    if (i == 1) {
      if (Estado == 9) {
        text("Resistirse", x, offsetY - 5);

        if (zona(x, offsetY, ancho, alto)) {
          Estado++;
        }
      } else if (Estado == 11) {
        text("Autopista", x, offsetY - 5);

        if (zona(x, offsetY, ancho, alto)) {
          Estado = 14;
        }
      }
    }
    // Botón con final malo
    else if (i == 2) {
      if (Estado == 9) {
        text("Entregarse", x, offsetY - 5);
        
        if (zona(x, offsetY, ancho, alto)) {
          Estado = 15;
        }
      } else if (Estado == 11) {
        text("Rio", x, offsetY - 5);
        
        if (zona(x, offsetY, ancho, alto)) {
          Estado++;
        }
      }
    }
  }
}
