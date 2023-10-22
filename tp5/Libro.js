class Libro {
  constructor() {
    this.obtenido = false;
    this.posX = 0;
    this.posY = 0;
    this.posGrillaX =0;
    this.posGrillaY =0;
  }

  Dibujar(X, Y) {
    if (!this.obtenido) {

      this.posX=X+15;
      this.posY=Y+15;
      fill(150, 50, 100);
      rect(this.posX, this.posY, 25, 25);
    }
  }

  ActualizasPosGrilla(x, y) {
    this.posGrillaX =x;
    this.posGrillaY =y;
  }
  
  MarcarComoObtenido(x,y) {
    let distancia = dist(x, y, this.posX, this.posY);
    if (distancia<25){
      this.obtenido = true;
    }
  }
}
