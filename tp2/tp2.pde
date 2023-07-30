//Link del video
//https://youtu.be/OwYEwwQmX1g

//variables
PImage img;
int Cant_de_rects=15;
float huemouse = 0;
float hue = 0;
int tamaño = 190;

void setup() {
  size(800, 400);
  img = loadImage("dva-dva-1986.jpg");
}

void draw() {
  image(img, 0, 0);
  dibujar_rect(Cant_de_rects); // Llama a la función dibujar_rect con la cantidad de cuadrados deseada
}

void keyPressed() {
  if (keyCode == UP) {
    //aumentar cuadrados dibujados
    if (Cant_de_rects>1 && Cant_de_rects<30 ) {
      Cant_de_rects-=1;
    }
    if (Cant_de_rects>30) {
      Cant_de_rects-=4;
    }
  }

  //disminuir cuadrados dibujados
  if (keyCode == DOWN && Cant_de_rects>0 && Cant_de_rects<150) {
    Cant_de_rects+=2;
  }

  //reiniciar
  if (key == 'R' || key == 'r') {
    //rotar= radians (0);
    Cant_de_rects=15;
  }
}
