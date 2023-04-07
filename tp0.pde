void setup(){
  size(800,400);
}
void draw(){
  PImage mi_imagen;
  mi_imagen= loadImage("car.jpg");
  image(mi_imagen,0,0);
  
 fill(13,9,10);
 //background
 rect(400,0,400,240);
  fill(31,32,62);
 triangle(400,0,450,0,400,60);
 triangle(530,0,550,100,590,0);
 triangle(596,0,640,0,630,70);
 
 fill(83,55,54);
  //faro de luz
  rect(538,-10,10,230);
  
  fill(122,89,80);
  //acera
  rect(400,240,400,10);
  
    fill(226,200,163);
    rect(400,240,400,3);
  
  fill(104,85,79);
  noStroke();
  //calle
  rect(400,250,400,150);
  
  fill(226,200,163);
  rect(400,250,400,5);
  
  fill(19,13,17);
  rect(400,355,400,100);
  
  fill(18,12,14);
    //wheels
  stroke(0,0,0);
  ellipse(500,235,33,33);
    ellipse(662,235,33,33);
  fill(137,128,133);
    ellipse(500,235,22,22);
    ellipse(662,235,22,22);
    
    
  fill(254,246,200);
  //Forma del auto
  beginShape();
  vertex(465,234);
  vertex(455,215);
  vertex(460,200);
  vertex(545,200);
  vertex(565,179);
  vertex(625,179);
  vertex(685,200);
  vertex (735,200);
  vertex(740,220);
  vertex(735,235);
  vertex(685,235);
  vertex(680,225);
  vertex(645,225);
  vertex(640,237);
  vertex(530,237);
  vertex(515,215);
  vertex(480,215);
  vertex(478,234);
  vertex(465,234);
  endShape(CLOSE);
  
  noStroke();
  fill(131,109,98);
  beginShape();
   vertex(465,234);
  vertex(453,210);
  vertex(742,210);
  vertex(735,235);
  vertex(685,235);
  vertex(680,225);
  vertex(645,225);
  vertex(640,237);
  vertex(530,237);
  vertex(515,215);
  vertex(480,215);
  vertex(478,234);
  vertex(465,234);
     endShape(CLOSE);
  
  fill(18,13,9);
  beginShape();
  vertex(550,200);
  vertex(568,181);
  vertex(610,181);
  vertex(640,198);

 endShape(CLOSE);
 
 fill(131,127,123);
   rect(460,220,12,15);
   rect(725,220,13,15);
  
  line(548,200,548,235);
  line(548,235,615,235);
  line(615,235,615,200);
 
  
}
