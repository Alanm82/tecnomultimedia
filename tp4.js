//Url: https://www.youtube.com/watch?v=QG2IDscJNh0
// Variables
let pantalla=0;
let tamaño =200;
let Cantidad;
let Horizontal = 2;
let Vertical = 0;
let Restart=false;
let i, j;
let puntuacion;
let pY=777;
let iY=777;
let posxPiso;
let posxdiagPiso;
let posyPiso;
let posxBert;
let difX;
let difY;
let posxdiagBert;
let posyBert;
let Pisos=[];
let posxInicial=700;
let posyInicial=300;
let posxAnterior=700;
let posyAnterior=175;
let angulo = -90;
let distancia;
let op=true;
let Reposo=false;
let cuadradosObjetivo = [
  [2, 0],
  [2, 1],
  [3, 1],
  [1, 2],
  [2, 2],
  [3, 2],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4]
];

function setup() {
  createCanvas(1400, 1400);
  imageMode(CENTER);
  imagenes();
  Cantidad = 1000 / tamaño; // Calcular el número de columnas basado en el ancho del lienzo
  // Inicializar la matriz Pisos con dimensiones adecuadas
  for (i = 0; i <= Cantidad; i++) {
    Pisos[i] = [];
    for (j = 0; j <= Cantidad; j++) {
      Pisos[i][j] = false;
    }
  }
}

function draw() {
  if (pantalla==0) {
    background(0);
    image (imgLife, width/2-250, pY, 50, 50);
    image(imgText[8], width/2, 1250, 400, 200);
    instrucciones( width/2.2, height-330, 600, 50);
    image(imgText[0], width/2, height/3, 1200, 400);
    image(imgText[1], width/2, 777, 350, 150);
    image(imgText[2], width/2, 933, 400, 100);
    textSize(32);
    fill(255);
  } else if (pantalla==1) {
    background(20);
    for (i = 0; i <= Cantidad; i++) {
      for (j = 0; j <= Cantidad; j++) {
        posxPiso = tamaño * i +200;
        posxdiagPiso = tamaño * i-100+200;
        posyPiso = tamaño * j+200;
        posxBert = posxPiso +(tamaño/2);
        posxdiagBert = posxdiagPiso +(tamaño/2);
        posyBert = posyPiso-25;
        fill(255);
        // Verificar si el piso es objetivo y pintarlo
        if (Pisos[i][j]) {
          DibPiso(imgPisoAct, posxPiso, posyPiso, tamaño);
        } else {
          DibPiso(imgPisoDes, posxPiso, posyPiso, tamaño);
        }
        imageMode(CENTER);
        cuadsObj();
        personaje();
        Direccion();
        Resultado();
        vidas();
        instrucciones(900, 50, 200, 20);
        // Calcula la puntuación
        calcPunt();
        // Muestra la puntuación
        textSize(60);
        fill(255, 255, 0); // Amarillo
        text("Puntuación: " + puntuacion, width - 500, 200);
      }
    }
  } else if (pantalla==2) { //Creditos
    background(0);
    image(imgText[9], width/2, height/3, 1000, 800);
    image(imgText[6], width/2, 1100, 900, 300);
  }
}
function keyPressed() {
  if (pantalla==0) {
    opcion();
    if (keyCode===ENTER && pY == 777) {
      pantalla=1
    } else if (keyCode===ENTER && pY == 933) {
      pantalla=2
    }
  } else if (pantalla==1) {
    if (estadoJuego === "ganaste" || estadoJuego === "perdiste" ) {
      if (key=="r" || key=="R") {
        Restart=true
      } else {
        Restart=false
      }
      if (keyCode==27) {
        pantalla=0;
        Restart=true;
        Reiniciar();
      }
    }
    if (Reposo && estadoJuego == "jugando") {
      Movimiento();
    }
  } else if (pantalla==2) {
    if (keyCode==27) {
      pantalla=0;
      Restart=true;
      Reiniciar();
    }
  }
}
function mousePressed() {
  if (pantalla==0) {
    if (boton(width/2, height/1.8, 350, 150) && pantalla==0) {
      pantalla=1
    }
    if (boton( width/2, height/1.5, 400, 125) && pantalla==0) {
      pantalla=2
    }
  }
}
