Boolean Click;
int i =1 ;
//parametros de rect
int x=550;
int y= 550;
int ancho= 100;
int alto =50;


void Continue() {
  rectMode(CENTER);
  stroke(255);
  textSize(20);
  textAlign(CENTER, CENTER);


    fill (0);
    rect(x, y, ancho, alto);
    fill (255);
    text("Continuar", x, y-5);
  
}



void mouseClicked() {
  if (Estado>0 && Estado < 9 || Estado >9 && Estado <=12) {

    if (zona (x, y, ancho, alto)) {

      Estado++;
    }
  }
}
