class Grilla {
  constructor() {
    this.Cantidad = 10;
    this.tamaño = 60;
    this.posX = 0;
    this.posY = 0;
    this.objLibro=[];
    this. PosicionRecorrible =[ [4, 0], [4, 1], [5, 1], [3, 2], [4, 2],
      [5, 2], [3, 3], [4, 3], [5, 3], [6, 3], [2, 4], [3, 4], [4, 4], [5, 4],
      [6, 4], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5]];
    this.crearLibro();
    this.crearPersonaje();
    this.DibPersonaje();
    this.CaminoRecorrible();
    this.PersonajeGrilla();
  }

  Dibujar() {
    for (let i = 0; i <= this.Cantidad; i++) {
      for (let j = 0; j <= this.Cantidad; j++) {
        if (j % 2 === 0) {
          this.posX = this.tamaño * i +this.tamaño;
        } else if (j % 2 === 1) {
          this.posX = this.tamaño * i + this.tamaño / 2;
        }
        this.posY = this.tamaño * j ;
        fill(0);
        fill(255);
        //verifica cuando dibujar los objetos en el camino recorrible
        if (this.CaminoRecorrible(i, j)) {
          rect(this.posX, this.posY, this.tamaño, this.tamaño);
          const indice = this.PosicionRecorrible.findIndex(([x, y]) => x === i && y === j);
          if (indice !== -1) {
            this.objLibro[indice].MarcarComoObtenido(this.objPersonaje.posxInicial, this.objPersonaje.posyInicial);
            this.objLibro[indice].Dibujar(this.posX, this.posY);
          }
        }


        this.DibPersonaje(i, j, this.CaminoRecorrible(i, j));
      }
    }
  }


  crearPersonaje() {
    this.objPersonaje = new Personaje(this.tamaño, this.Cantidad);
  }

  crearLibro() {
    for (let i=0; i<this. PosicionRecorrible.length; i++) {
      this.objLibro[i]=new Libro();
    }
  }

  DibPersonaje(i, j, condicion) {
    if (this.PersonajeGrilla(i, j)) {
      this.objPersonaje.Dibujar(this.posX, this.posY, condicion);
    }
  }

  CaminoRecorrible(i, j) {
    if (this.PosicionRecorrible.some(([x, y]) => x === i && y === j)) {
      return true;
    } else {
      return false
    }
  }

  MovimientoEnGrilla() {
    this.objPersonaje.Movimiento();
  }
  PersonajeGrilla(i, j) {
    if (this.objPersonaje.PosenGrillaX === i && this.objPersonaje.PosenGrillaY === j) {
      return true;
    } else {
      return false
    }
  }
}
