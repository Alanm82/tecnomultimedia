Boolean Click;
int i =1 ;
//parametros de rect
int x=550;
int y= 550;
int ancho= 100;
int alto =50;


void Continue() {
  float alpha =map(mouseX,0,width,0,255); 
  rectMode(CENTER);
  stroke(255,alpha);
  textSize(20);
  textAlign(CENTER, CENTER);
  

    fill (0,alpha);
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
