//variables

void Homebutton() {
  rectMode(CENTER);
  textSize(30);
  textAlign(CENTER, CENTER);

  //parametros de rect
  int x=300;
  int ancho= 150;
  int alto =100;
  //dibujar rect
  for (int i=1; i<3; i++ ) {
    int y= 180*i;
    fill (0);
    rect(x, y, ancho, alto);
    fill (255);
    if (i==1) {
      text("Iniciar", x, y-5);
    } if (Estado == 0 && zona(x, 180, ancho, alto)) {
        Estado++;
    } 
    else if (i==2) {
      text("Creditos", x, y-5);
    } if (Estado == 0 && zona(x, y, ancho, alto)) {
        Estado = 16;
    }
  }
}
