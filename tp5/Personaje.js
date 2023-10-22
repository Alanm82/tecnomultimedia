class Personaje {
  constructor(tam, Cantidad) {
    this.posxFinal=0;
    this.posyFinal=0;
    this.posxInicial=300;
    this.posyInicial=0;
    this.tam=tam;
    this.PosenGrillaX=4;
    this.PosenGrillaY=0;
    this.Cantidad=Cantidad;
    this.vida=4;
    this.PerderVida();
    this.Desplazamiento();
    this.PosicionadoenGrilla();
    this.vivo=true;
    this.vidaPerdida = false;
  }

  Dibujar(X, Y, condicion) {
    this.posxFinal=X;
    this.posyFinal=Y;
    fill(0);
    this.Desplazamiento();
    rect(this.posxInicial, this.posyInicial, this.tam);
    this.PerderVida(condicion);
  }

  Movimiento() {
    if (this.PosicionadoenGrilla() &&  this.vivo) {
      if (this.PosenGrillaX > -1) {
        if (keyCode === LEFT_ARROW) {
          console.log("Teclapresionadal");
          if (this.PosenGrillaY % 2) {
            this.PosenGrillaX--;
          }
          this.PosenGrillaY++;
        }
      }

      // Movimiento Horizontal hacia la derecha
      if (this.PosenGrillaY>0) {
        if (keyCode === RIGHT_ARROW) {
          console.log("Teclapresionadar");
          if (this.PosenGrillaY % 2 === 0) {
            this.PosenGrillaX++;
          }
          this.PosenGrillaY--;
        }
      }

      // Movimiento Vertical hacia arriba
      if (this.PosenGrillaY >0) {
        if (keyCode === UP_ARROW) {
          console.log("Teclapresionadaa");
          if (this.PosenGrillaY % 2) {
            this.PosenGrillaX--;
          }
          this.PosenGrillaY--;
        }
      }

      // Movimiento Vertical hacia abajo
      if (this.PosenGrillaY< this.Cantidad) {
        if (keyCode === DOWN_ARROW) {
          console.log("Teclapresionadad");
          if (this.PosenGrillaY% 2 === 0) {
            this.PosenGrillaX++;
          }
          this.PosenGrillaY++;
        }
      }
    }
  }

  PerderVida(condicion) {
    if (!condicion && !this.vidaPerdida) {
      this.vida -= 1;
      console.log(this.vida);
      this.vidaPerdida=true;
      if (this.vida==0) {
        this.vivo = false;
      }
    }
    if (this.PosicionadoenGrilla() && this.vidaPerdida) {
      this.PosenGrillaX=4;
      this.PosenGrillaY=0;
      this.vidaPerdida=false;
    }
  }

  Desplazamiento() {
    let distancia = dist(this.posxInicial, this.posyInicial, this.posxFinal, this.posyFinal);
    let velocidad = 4;
    if (distancia > velocidad) {
      // Calculate the angle to the target
      let obtenerAngulo = atan2(this.posyFinal - this.posyInicial, this.posxFinal - this.posxInicial);

      // Calculate the new position based on velocity
      this.posxInicial += velocidad * cos(obtenerAngulo);
      this.posyInicial += velocidad * sin(obtenerAngulo);
    } else {
      // If the distance is less than the velocity, set the position to the final position
      this.posxInicial = this.posxFinal;
      this.posyInicial = this.posyFinal;
    }
  }

  PosicionadoenGrilla() {
    if (this.posxInicial== this.posxFinal && this.posyInicial == this.posyFinal) {
      return  true;
    }
  }
}
