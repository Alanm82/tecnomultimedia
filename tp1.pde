//Variables
int Colorboton=(255);
PImage img1;
PImage img2;
PImage img3;
int Contador =(0);
int alpha = (0);
int randoncolor = (0);
float posx = (25); 
float posy = (100);
float green=(0);
float red=(0);
float blue=(0);

void setup(){ 
  size(640,480);   
  img1= loadImage("galeon1.jpg");
  img2= loadImage("galeon2.jpg");
  img3= loadImage("galeon3.jpg");
  textSize(16);
}

//void mousePressed(){
  //ellipse( mouseX, mouseY, 2, 2 );
  //text( "x: " + mouseX + " y: " + mouseY, mouseX + 2, mouseY );



  void draw() {
    textSize(30);
      //Introduccion
    if(Contador<=300){
    background(0);
    fill(255);
    textSize(100);
    text("Galeón",160,250);
    }
     //Primera imagen
    if(Contador<=1050 && Contador>301){
    image(img1,0,0);
    //1r texto
    fill(52,255,249,alpha);
    alpha ++;
      text("   Un galeón es un tipo de embarcación histórica,\n"+ " que se usó principalmente en el siglo XVI y XVII \n" +
      "             para transportar bienes y riquezas \n" + " por el océano Atlántico entre Europa y América\n",25,100);
     
    } 
    
    //Segunda imagen
    fill(0);
    if (Contador>=1051 && Contador<= 1750){
      textSize(24);
      //imagen
    image(img2,0,0);
    
    
    //2do texto
   text("Los galeones eran barcos grandes, de hasta \n"+"60 metros de longitud y 3-4 pisos de altura\n"+
     "Tenían una capacidad de carga de entre \n"+"200 y 800 toneladas,podían transportar una gran \n"+
     "cantidad de bienes, como oro, plata, piedras \n"+"preciosas, especias, telas y alimentos",posx,posy);
     if (Contador % 100 == 0){
         posx= random (0, width/3);
         posy= random(0, height/3);
       }
 
    }
    //tercera imagen
    textSize(16);
     if (Contador>1751){
    image(img3,0,0);
   
    //3er texto 
      fill(green,blue,red);
    text("    Se usaban con fines militares, por lo que estaban equipados con un fuerte armamento \n"+"defensivo y ofensivos. Tenían cañones de diversos calibres, espadas y arcabuces,\n"+"estaban protegidos por una estructura de madera y hierro diseñada para resistir los ataques\n"+" tuvieron un papel en la historia de la colonización y el robo en América",15,200);
  //cambio de color en el texto
  }
    //incrementar contador
    Contador ++;
    //print contador
    //text("Contador:"+Contador,10,20);
    
    //random color variable
     if (Contador%100 == 0){
        green = random (255);
      blue  = random (255);
         red = random (255);
     }

    textSize(12);
     // Definir Zonadeboton
     
 boolean Zonadeboton = (mouseX >= 535 && mouseX <= 588 && mouseY >= 413 && mouseY <= 433);
    //boton
     if (Contador>2500){
        fill(Colorboton);
  rect(535,413,53,20);
   fill(0,0,0);
  text("Reiniciar",540,425 );
     }
     
 
  
  
  //Cambiar el color del boton si el mouse esta sobre el 
 
  if (Zonadeboton == true) {
  Colorboton = 150;
} else {
  Colorboton = 255;
 }
  }
 boolean Zonadeboton;
 
 void mouseClicked(){
   if (Contador>2500){
  Zonadeboton = (mouseX >= 535 && mouseX <= 588 && mouseY >= 413 && mouseY <= 433);
   }
   if(Zonadeboton == true){
   background(0);
   Contador = 0;
   }
     if (Contador <= 2500) {
    Zonadeboton = false;
   }
 }
 
