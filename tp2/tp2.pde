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
  dibujar_rect(Cant_de_rects);
}

void keyPressed() {
  if (keyCode == UP) {
    if (Cant_de_rects>2 && Cant_de_rects<30 ) {
      Cant_de_rects-=1;
    }
    if (Cant_de_rects>30) {
      Cant_de_rects-=3;
    }
  }


  if (keyCode == DOWN && Cant_de_rects>0 && Cant_de_rects<100) {
    Cant_de_rects+=2;
  }

  //reiniciar
  if (key == 'R' || key == 'r') {
    Cant_de_rects=15;
  }
}
