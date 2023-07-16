void inicio(){
   rectMode(CENTER);
  textSize(30);
  textAlign(CENTER, CENTER);

  //parametros de rect
  int x=300;
  int ancho= 150;
  int alto =100;
  fill (0);
  rect(x, y, ancho, alto);
  fill (255);
  text("Inicio", x, y-5);
  if(Estado==16 ||Estado==15 ||Estado==13 ||Estado==14 ){
    if (zona (x, y, ancho, alto)) {

      Estado=0;
    }
  }
}
