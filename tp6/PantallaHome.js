class PantallaHome{
  
  constructor(Imagen) {
    this.objBotonHome=[];
    this.Imagen=Imagen;
    this.toPantalla=1;
    this.toPantalla1=16;
  }

  Dibujar()
  {
    image(this.Imagen, 0, 0);
    this.objBotonHome[1].Dibujar();
    this.objBotonHome[2].Dibujar();
  }
  
  CrearBoton() {
    this.objBotonHome[1]= new Boton(width/2, height/2-100, 150, "Iniciar", this.toPantalla);
    this.objBotonHome[2]= new Boton(width/2, height/2+100, 150, "Creditos", this.toPantalla1);
  }

  ManejarClick()
  {
    let nuevaPantalla;
    nuevaPantalla=this.objBotonHome[1].Click();
    nuevaPantalla=this.objBotonHome[2].Click();
    if (nuevaPantalla)
    {
      return nuevaPantalla;
    }
  }
}
