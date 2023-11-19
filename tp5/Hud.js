class Hud {
  constructor(vidasPersonaje) {
    this.vidas=vidasPersonaje;
    this.posX=35;
    this.posY=25;
  }
  Dibujar() {
    textSize(20);
    fill(255);
    console.log(this.vidas);
    for (let i=0; i<this.vidas; i++)
    {
      image(ImgCorazon, this.posX +(24*i), this.posY+50);
    }
  }
}
