class Aventura {
  constructor() {
    this.actualPantalla=0;
    this.crearPantallaHome();
    this.crearPantalla1Boton();
    this.crearPantalla2Botones();
    this.cambiarPantalla();
    this.objPantalla1Boton=[];
    this.pantalla2Botones=[];
  }

  Dibujar()
  {
    if (this.actualPantalla==0) {
      this.objPantallaHome.Dibujar();
    } else if (this.actualPantalla!=9 || this.actualPantalla!=11) {
      this.objPantalla1Boton[this.actualPantalla].Dibujar();
    } else {
      this.pantalla2Botones[this.actualPantalla].Dibujar();
    }
  }

  cambiarPantalla(nuevaPantalla) {
    this.actualPantalla = nuevaPantalla;
  }

  crearPantallaHome() {
    this.objPantallaHome=new PantallaHome(imgs[0]);
  }

  crearPantalla1Boton()
  {
    this.objPantalla1Boton[1]=new Pantalla1Boton(imgs[1], "Continuar", 2)
      this.objPantalla1Boton[2]=new Pantalla1Boton(imgs[2], "Continuar", 3)
      this.objPantalla1Boton[3]=new Pantalla1Boton(imgs[3], "Continuar", 4)
      this.objPantalla1Boton[4]=new Pantalla1Boton(imgs[4], "Continuar", 5)
      this.objPantalla1Boton[5]=new Pantalla1Boton(imgs[5], "Continuar", 6)
      this.objPantalla1Boton[6]=new Pantalla1Boton(imgs[6], "Continuar", 7)
      this.objPantalla1Boton[7]=new Pantalla1Boton(imgs[7], "Continuar", 8)
      this.objPantalla1Boton[8]=new Pantalla1Boton(imgs[8], "Continuar", 9)
      this.objPantalla1Boton[13]=new Pantalla1Boton(imgs[13], "Continuar", 14)
      this.objPantalla1Boton[16]=new Pantalla1Boton(imgs[16], "Inicio", 0)
  }

  crearPantalla2Botones()
  {
    this.pantalla2Botones[9]=new Pantalla2botones(imgs[9], "Entregarse", "Resistirse", 15, 10);
    this.pantalla2Botones[11]=new Pantalla2botones(imgs[11], "Rio", "Autopista", 12, 14);
  }

  mousePressed() {
    if (this.actualPantalla==0) {
      this.objPantallaHome.manejarClick();
    } else if (this.actualPantalla!=9 || this.actualPantalla!=11) {
      this.objPantalla1Boton[this.actualPantalla].manejarClick();
    } else {
      this.pantalla2Botones[this.actualPantalla].manejarClick();
    }
    if (nuevaPantalla) {
      this.cambiarPantalla(nuevaPantalla);
    }
  }
}
