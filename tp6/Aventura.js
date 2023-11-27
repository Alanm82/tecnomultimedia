class Aventura {
  constructor() {
    this.actualPantalla = 0;
    this.objPantalla1Boton = [];
    this.pantalla2Botones = [];
    this.crearPantallaHome();
    this.crearPantalla1Boton();
    this.crearPantalla2Botones();
  }

  dibujar()
  {
    if (this.actualPantalla==0) {
      console.log("Acaentra");
      this.objPantallaHome.dibujar();
    } else if (this.actualPantalla!=9 || this.actualPantalla!=11) {
      // this.objPantalla1Boton[this.actualPantalla].dibujar();
    } else {
      this.pantalla2Botones[this.actualPantalla].dibujar();
    }
  }

  cambiarPantalla(nuevaPantalla) {
    this.actualPantalla = nuevaPantalla;
  }

  crearPantallaHome() {
    this.objPantallaHome = new PantallaHome(imgs[0]);
  }

  crearPantalla1Boton()
  {
    this.objPantalla1Boton[1] = new Pantalla1Boton(imgs[1], "Continuar", 2);
    this.objPantalla1Boton[2] = new Pantalla1Boton(imgs[2], "Continuar", 3);
    this.objPantalla1Boton[3] = new Pantalla1Boton(imgs[3], "Continuar", 4);
    this.objPantalla1Boton[4] = new Pantalla1Boton(imgs[4], "Continuar", 5);
    this.objPantalla1Boton[5] = new Pantalla1Boton(imgs[5], "Continuar", 6);
    this.objPantalla1Boton[6] = new Pantalla1Boton(imgs[6], "Continuar", 7);
    this.objPantalla1Boton[7] = new Pantalla1Boton(imgs[7], "Continuar", 8);
    this.objPantalla1Boton[8] = new Pantalla1Boton(imgs[8], "Continuar", 9);
    this.objPantalla1Boton[10] = new Pantalla1Boton(imgs[10], "Continuar", 11);
    this.objPantalla1Boton[12] = new Pantalla1Boton(imgs[12], "Continuar", 13);
    this.objPantalla1Boton[13] = new Pantalla1Boton(imgs[13], "Inicio", 0);
    this.objPantalla1Boton[16] = new Pantalla1Boton(imgs[16], "Inicio", 0);
  }

  crearPantalla2Botones()
  {
    this.pantalla2Botones[9]=new Pantalla2botones(imgs[9], "Entregarse", "Resistirse", 15, 10);
    this.pantalla2Botones[11]=new Pantalla2botones(imgs[11], "Rio", "Autopista", 12, 14);
  }

  click() {
    let nuevaPantalla;
    if (this.actualPantalla==0) {
      nuevaPantalla= this.objPantallaHome.manejarClick();
      this.objPantallaHome.manejarClick1();
    } else if (this.actualPantalla!=9 || this.actualPantalla!=11) {
      //nuevaPantalla= this.objPantalla1Boton[this.actualPantalla].manejarClick();
    } else {
      nuevaPantalla= this.pantalla2Botones[this.actualPantalla].manejarClick();
      this.pantalla2Botones[this.actualPantalla].manejarClick1();
    }
    if (nuevaPantalla) {
      this.cambiarPantalla(nuevaPantalla);
    }
  }
}
