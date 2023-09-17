let vida = 3;
function vidas(){
if (perder && !perdio){
  vida -= 1; // Resta uno si el jugador perdió y no se ha restado antes
  perdio = true; // Marca que la resta se ha realizado
  estadoJuego = "jugando";
}
for(let a=1; a<vida+1;a++){
image(imgLife,55*a,50,50,50);
}
}
