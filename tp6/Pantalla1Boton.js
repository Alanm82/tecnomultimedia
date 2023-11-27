class Pantalla1Boton{
  
  constructor(Imagen,botonText, toPantalla) {
    this.Imagen=Imagen;
    this.botonText=botonText;
    this.toPantalla=toPantalla;
    this.crearBoton();
  }

  dibujar()
  {
    image(this.Imagen, 0, 0);
    this.objContinueBoton.dibujar();
  }
  crearBoton() {
    this.objContinueBoton= new Boton(550, 550, 100,this.botonText,this.toPantalla);
  }
  
  manejarClick()
  {
    let nuevaPantalla;
    nuevaPantalla=this.objContinueBoton.Click();
    if (nuevaPantalla)
    {
      return nuevaPantalla;
    }
  }
  
}
