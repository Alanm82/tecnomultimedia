class PantallaResultado {
  constructor(Resultado) {
    this.Resultado=Resultado;
  }

  Dibujar()
  {
    fill(0);
    textSize(35);
    textAlign(CENTER);
    imageMode(CENTER);
    image( this.Resultado, width/2+50, height/2);
    textSize(25);
    text("Presiona Space para reiniciar\nEscape para ver las instrucciones", width/2+50, height/2+50);
    textAlign(CORNER);
  }
}
