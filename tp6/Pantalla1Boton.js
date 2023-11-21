class Pantalla1Boton{
  
  constructor(Imagen,botonText, toPantalla) {
    this.Imagen=Imagen;
    this.botonText=botonText;
    this.toPantalla=toPantalla;
  }

  Dibujar()
  {
    image(this.Imagen, 0, 0);
    this.objContinueBoton.Dibujar();
  }
  CrearBoton() {
    this.objContinueBoton= new Boton(550, 550, 100,this.botonText,this.toPantalla);
  }
  
  ManejarClick()
  {
    let nuevaPantalla;
    nuevaPantalla=this.objContinueBoton.Click();
    if (nuevaPantalla)
    {
      return nuevaPantalla;
    }
  }
  
}
