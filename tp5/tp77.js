let objJuego;


function preload() {
  
}

function setup(){
  createCanvas(600,400);
  objJuego = new Juego();
}


function draw() {
  objJuego.Dibujar();
}

function keyPressed(){
objJuego.MovimientoJuego();
}
