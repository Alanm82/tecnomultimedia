class Contador {
  constructor() {
    this.posX=25;
    this.posY=25;
    this.Cuenta=0;
  }
  Dibujar(Libros) {
    this.Cuenta=Libros;
    text("Libros"+this.Cuenta, this.posX, this.posY);
  }
}
