//Link del video
//https://youtu.be/OwYEwwQmX1g

//variables
PImage img;
int modiTam=20;
int VelA=1 ;
int AceA=5 ;
float huemouse=0;
float hue = 0;
boolean mouseActivo = false;

void setup() {
  size(800, 400);
  img = loadImage("dva-dva-1986.jpg");
}

void draw() {
  image(img, 0, 0);
  
  // Configuración de los rectángulos
  strokeWeight(11);
  rectMode(CENTER);
  
  // Bucle principal
  for (int i = 0; i < 4; i++) {
      push();
      if (i == 1) {
      translate(700, 100);
    } else if (i == 2) {
      translate(500, 300);
    } else if (i == 3) {
      translate(700, 300);
    } else {
      translate(500, 100);
    }
    
    
        // Bucle para los tamaños de los rectángulos
        for (int tamaño = 190; tamaño > 0; tamaño -= modiTam) {
      
          // Calcular el tono del color
          float Distrect = dist(0, 0, tamaño, tamaño);
          hue = map(Distrect, 0, 190, 235,50 );
      
          //Calcular tono en base al mouse 
          huemouse=map(mouseY,0,height,0,255);
          if (mouseActivo==true){
          hue-=huemouse;
          }
      
          // Establecer el color del stroke
          if (i == 0) {
          fill(hue, 100 + hue, hue);
          stroke(hue, 100 + hue, hue);  //verde
          }else if (i == 1) {
          fill (100 + hue, hue, hue);
          stroke(100 + hue, hue, hue);  //rojo
          }else if (i == 2) {
          fill (130 + hue, 80 + hue, hue);
          stroke(130 + hue, 80 + hue, hue);  // Azul
          }else if (i == 3) {
          fill(70 + hue, hue, 130 + hue);
          stroke(70 + hue, hue, 130 + hue);  // violeta
          }
      
          // Dibujar rectángulo
          rect(0, 0, tamaño, tamaño);
          }
    
          pop();
         }
       }
void keyPressed(){
  if (keyCode == UP){
      //aumentar cuadrados dibujados
    if (modiTam>1){
       modiTam-=1;
    } if(modiTam>15){
      modiTam-=VelA;
    }
   
  }
  
  //disminuir cuadrados dibujados 
  if (keyCode == DOWN){
    modiTam+=VelA;
  }
    //aumentar velocidad
    if(modiTam==30){
      VelA+=AceA;
    }
    
  //reiniciar
   if (key == 'R' || key == 'r') {
  //rotar= radians (0);
  modiTam=20;
  mouseActivo =false;
  }
 
}

 void mouseClicked(){
   if(mouseButton==RIGHT){
     mouseActivo = !mouseActivo;
   }
 }
