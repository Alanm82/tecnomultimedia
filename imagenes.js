let imgs =[];
let imgPisoDes;
let imgPisoAct;
let imgLife;
let imgText=[];

function imagenes(){
for (let q = 0; q < 4; q++) {
    imgs[q] = loadImage("Data/Qbert"+q+".png");
  }
  for (let w = 0; w <10; w++){
  imgText[w] = loadImage("Data/Qtext"+w+".png");
  }
  imgPisoDes= loadImage("Data/floor1.png");
  imgPisoAct= loadImage("Data/floor2.png");
  imgLife = loadImage("Data/Qblife.png");
}

function DibPiso(img,x,y,tam){
  if (cuadsObj()==="true") {
        if (j % 2 === 0) {
          imageMode(CORNER);
          image(img, x, y, tam, tam);
        } else {
          imageMode(CORNER);
          image(img, x- 100, y, tam, tam);
        }
      }
    }
