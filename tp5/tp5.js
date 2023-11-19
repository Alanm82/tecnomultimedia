//Url: https://youtu.be/v5S1qebUFHk

let objJuego;
let imgEscenario;
let imgLibro;
let font;
let LibroText;
let ImgPersonaje;
let ImgCorazon;
let textPerdiste;
let textWin;
let ImgInstrucciones;


function preload() {
  imgEscenario= loadImage("Data/escenario.png");
  imgLibro= loadImage("Data/libro.png");
  LibroText= loadImage("Data/LibroText.png");
  ImgPersonaje = loadImage("Data/Personaje.png");
  ImgCorazon = loadImage("Data/Corazon.png");
  textPerdiste = loadImage("Data/textFire.png");
  textWin = loadImage("Data/textWin.png");
  ImgInstrucciones = loadImage("Data/Instrucciones.png");
}

function setup(){
  createCanvas(600,400);
  objJuego = new Juego();
}


function draw() {
  objJuego.Dibujar();
}

function keyPressed(){
objJuego.controlesDelJuego();
}
