class Juego {
  constructor() {
    this.Estado="EnJuego";
    this.crearGrilla();
    this.crearHud();
    this.crearTimer();
    this.CrearFondos();
    this.CrearPantallas();
    this.EstadodeJuego();
    this.reiniciarJuego();
    this.FondoSeleccionado=0;
  }

  Dibujar() {
    background(0);
    if (this.FondoSeleccionado==0) {
      this.Fondo1.Dibujar();
    } else {
      this.Fondo2.Dibujar();
      this.objGrilla.Dibujar();
      this.crearHud();
      this.objHud.Dibujar();
      this.objTimer.Iniciar();
      this.EstadodeJuego();
      console.log("vidas"+this.objGrilla.obtenerVidaPersonaje());
      console.log(this.Estado);
    }
  }


  crearGrilla() {
    this.objGrilla = new Grilla();
  }
  crearHud() {
    this.objHud= new Hud(this.objGrilla.obtenerVidaPersonaje());
  }

  crearTimer() {
    this.objTimer= new Timer();
  }
  CrearFondos() {
    this.Fondo1=new Fondo(ImgInstrucciones, width/2, height/2);
    this.Fondo2=new Fondo(imgEscenario, width/2+45, height/2);
  }

  CrearPantallas() {
    this.PantallaWin = new PantallaResultado(textWin);
    this.PantallaDerrota = new PantallaResultado(textPerdiste);
  }

  controlesDelJuego() {
    if (this.FondoSeleccionado==0)
    {
      if (key === ' ') {
        this.FondoSeleccionado=2;
      }
    } else {
      if (this.Estado === "EnJuego")
      {
        this.objGrilla.controlesEnGrilla();
      }
      this.reiniciarJuego();
    }
  }

  EstadodeJuego() {
    if (this.objGrilla.obtenerVidaPersonaje()===0 || this.objTimer.SinTiempo===true) {
      this.Estado="Perdiste";
    } else if (this.objGrilla.noHayLibros()) {
      this.Estado = "Ganaste";
    }
    if (this.Estado === "EnJuego")
    {
       this.objTimer.stop=false;
    } else if (this.Estado === "Ganaste") {
      this.objTimer.stop=true;
      this.PantallaWin.Dibujar();
    } else if (this.Estado === "Perdiste") {
      this.PantallaDerrota.Dibujar();
    }
  }
  //restablecer los parametros a los iniciales
  reiniciarJuego() {
    if (this.Estado === "Perdiste"||this.Estado === "Ganaste")
    {
      if (key === 'Escape' || key === 'Esc') {
        this.FondoSeleccionado=0;
        this.objGrilla.Reiniciar();
        this.Estado="EnJuego";
        this.objTimer.ReiniciarTiempo();
      }
      if (key === ' ') {
        this.objGrilla.Reiniciar();
        this.Estado="EnJuego";
        this.objTimer.ReiniciarTiempo();
      }
    }
  }
}
