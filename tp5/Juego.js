class Juego {
  constructor() {
    this.Estado="";
    this.crearGrilla();
    this.crearContador();
    this.EstadodeJuego();
    this.reiniciarJuego();
  }

  Dibujar() {
    background(200);
    this.objGrilla.Dibujar();
    this.EstadodeJuego();
    this.objContador.Dibujar(this.objGrilla.objLibro.filter(Libro => Libro.obtenido).length);
  }


  crearGrilla() {
    this.objGrilla = new Grilla();
  }
  crearContador() {
    this.objContador= new Contador();
  }

  MovimientoJuego() {
    this.objGrilla.MovimientoEnGrilla();
    this.reiniciarJuego();
  }

  EstadodeJuego() {
    if (this.objGrilla.objPersonaje.vida==0) {
      this.Estado="Perdiste";
    }
    if (this.objGrilla.objLibro.every(Libro => Libro.obtenido)) {
      this.Estado = "Ganaste";
    }
    if (this.Estado === "Ganaste") {
      fill(0);
      textSize(35);
      textAlign(CENTER);
      text("Ganaste", width/2, height/2);
      textSize(25);
      text("Presiona Space para reiniciar", width/2+50, height/2);
    } else if (this.Estado === "Perdiste") {
      //mensaje de derrota
      fill(0);
      textSize(35);
      textAlign(CENTER);
      text("Perdiste", width/2, height/2);
      textSize(25);
      text("Presiona Space para reiniciar", width/2+50, height/2);
    }
  }
  //restablecer los parametros a los iniciales
  reiniciarJuego() {
    if (key === ' ') {
      this.objGrilla.objLibro.forEach(Libro => {
        Libro.obtenido = false;
      }
      );
      this.objGrilla.objPersonaje.PosenGrillaX = 4;
      this.objGrilla.objPersonaje.PosenGrillaY = 0;
      this.objGrilla.objPersonaje.posxInicial=300;
      this.objGrilla.objPersonaje.posyInicial=0;
      this.objGrilla.objPersonaje.vida = 4;
    }
  }
}
