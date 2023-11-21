class Pantalla2botones{
  
  constructor(Imagen, botonText, botonText2, toPantalla, toPantalla1) {
    this.objOptionBoton=[];
    this.Imagen=Imagen;
    this.botonText=botonText;
    this.botonText2=botonText2;
    this.toPantalla=toPantalla;
    this.toPantalla1=toPantalla1;
  }

  Dibujar()
  {
    image(this.Imagen, 0, 0);
    this.objOptionBoton[0].Dibujar();
    this.objOptionBoton[1].Dibujar();
  }
  crearBoton() {
    this.objOptionBoton[0]= new Boton(550, 450, 100, this.botonText, this.toPantalla);
    this.objOptionBoton[1]= new Boton(550, 550, 100, this.botonText2, this.toPantalla1);
  }

  crearTexto()
  {
    this.objTexto
  }

  ManejarClick()
  {
    let nuevaPantalla;
    nuevaPantalla=this.objOptionBoton[0].Click();
    nuevaPantalla=this.objOptionBoton[1].Click();
    if (nuevaPantalla)
    {
      return nuevaPantalla;
    }
  }
}
