//https://youtu.be/qJTPXbMpixQ
int Estado=0;
PImage[] imagenes = new PImage[17]; // array de imagenes
String texto[];



void setup() {
  size(600, 600);
  texto = loadStrings("texto.txt");

  for (int i = 0; i < 17; i++) {
    imagenes[i] = loadImage("img " + i + ".jpg"); // Carga las imagenes
  }
}

void draw() {

  //home
  Pantalla();
  if (Estado==0) {
    Homebutton();
  } else if (Estado>0 && Estado < 9 || Estado ==10 || Estado ==12) {
    Continue();
  } else if (Estado==9) {
    Options(540, 480, 100, 50);
  } else if (Estado==11) {
    Options(540, 480, 100, 50);
  } else if(Estado==16 ||Estado==15 ||Estado==13 ||Estado==14 ){
    inicio(); 
    }
  textSize(18);
textAlign(CENTER, CENTER);
int Posy = 30; 
int espacio = 25;
int posx= 300;

for (int i = 0; i < texto.length; i++) {
  String[] lineaDividida = splitTokens(texto[Estado], "-");
  if (Estado==16){
  fill(0);
  textSize(50);
   Posy=200;
   espacio=100;
   posx= 230;
}
  for (int j = 0; j < lineaDividida.length; j++) {
    text(lineaDividida[j],posx,Posy+(espacio*j));
  }
}


 
}
