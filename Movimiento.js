function Movimiento(){
  // Movimiento Horizontal hacia la izquierda  
  if (Horizontal > -1) {
    if (keyCode === LEFT_ARROW) {
      if (Vertical % 2) {
        Horizontal--;
      }
      Vertical++;
    }
  }

  // Movimiento Horizontal hacia la derecha
  if (Vertical>0) {
    if (keyCode === RIGHT_ARROW) {
      if (Vertical % 2 === 0) {
        Horizontal++;
      }
      Vertical--;
    }
  }

  // Movimiento Vertical hacia arriba
  if (Vertical >0) {
    if (keyCode === UP_ARROW) {
      if (Vertical % 2) {
        Horizontal--;
      }
      Vertical--;
    }
  }

  // Movimiento Vertical hacia abajo
  if (Vertical < Cantidad) {
    if (keyCode === DOWN_ARROW) {
      if (Vertical % 2 === 0) {
        Horizontal++;
      }
      Vertical++;
    }
  }
}
