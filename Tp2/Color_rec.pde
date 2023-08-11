void colorrect(int x, int tono){
// Establecer el color del stroke
          if (x == 0) {
          fill(tono, 100 + tono, tono);
          stroke(tono, 100 + tono, tono);  //verde
          }else if (x == 1) {
          fill (100 + tono, tono, tono);
          stroke(100 + tono, tono, tono);  //rojo
          }else if (x == 2) {
          fill (130 + tono, 80 + tono, tono);
          stroke(130 + tono, 80 + tono, tono);  // Azul
          }else if (x == 3) {
          fill(70 + tono, tono, 130 + tono);
          stroke(70 + tono, tono, 130 + tono);  // violeta
          }
}
  
