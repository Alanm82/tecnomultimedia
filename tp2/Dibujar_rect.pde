void dibujar_rect(int Cant_de_rects) {

  // Configuración de los rectángulos
  strokeWeight(11);
  rectMode(CENTER);

  for (int i = 0; i <4; i++) { // Usa Cant_de_rects en lugar de 4
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
    for (tamaño = 190; tamaño > 0; tamaño -= 190 / Cant_de_rects) {

      // Calcular el tono del color
      float Distrect = dist(0, 0, tamaño, tamaño);
      hue = map(Distrect, 0, 190, 235, 50);

      // Calcular tono en base al mouse
      huemouse = map(mouseY, 0, height, 0, 255);
      if (Click(400)) {
        hue -= huemouse;
      }


      // Establecer el color del stroke
      if (i == 0) {
        fill(hue, 100 + hue, hue);
        stroke(hue, 100 + hue, hue);  //verde
      } else if (i == 1) {
        fill(100 + hue, hue, hue);
        stroke(100 + hue, hue, hue);  //rojo
      } else if (i == 2) {
        fill(130 + hue, 80 + hue, hue);
        stroke(130 + hue, 80 + hue, hue);  // Azul
      } else if (i == 3) {
        fill(70 + hue, hue, 130 + hue);
        stroke(70 + hue, hue, 130 + hue);  // violeta
      }

      rect(0, 0, tamaño, tamaño);
    }

    pop();
  }
}
