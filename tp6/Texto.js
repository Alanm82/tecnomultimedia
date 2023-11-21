class Texto {
  constructor(toPantalla) {
    this.posX = 300;
    this.Posy = 30;
    this.espacio = 25;
    this.textSize = 15;
    this.textoDePantalla = toPantalla;
  }

  dibujar() {
    /* if (estado!==16) {
     fill(255);
     this.posX = 300;
     this.Posy = 30;
     this.espacio = 25;
     this.textSize = 15;
     } else {
     fill(0);
     this.posX = 230;
     this.Posy = 200;
     this.espacio = 100;
     this.textSize = 45;
     }*/

    textSize(this.textSize);  // Establece el tamaño de fuente

    // Divide la página actual en fragmentos usando el guion "-"
    let lineas = split(texto, "-");

    // Muestra cada línea en la posición deseada
    text(lineas[this.textoDePantalla], this.posX, this.Posy + this.espacio * i);
  }
}
