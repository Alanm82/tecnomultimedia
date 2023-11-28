let objPantalla;
let texto=[];
let imgs=[];
let estado=0;
let imgsJuego=[];

function preload() {
  for(let i=0; i<17; i++){
  imgs[i]= loadImage("Data/img"+i+".jpg")
  }
  texto = loadStrings("Data/texto.txt");
  
}
function setup(){
  createCanvas(600,600);
  objAventura = new Aventura();
}


function draw() {
  objAventura.dibujar();
}
  

function mousePressed(){
objAventura.click();
}
