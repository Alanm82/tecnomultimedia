function boton(x,y,ancho,alto) {
  if (mouseX >= x - ancho/2 && mouseX <= x + ancho/2 && mouseY >= y - alto/2 && mouseY <= y + alto/2 && mouseButton == LEFT) {
    // Acción para el botón "Iniciar"
    return true;
  } else {
    return false;
  }
}
