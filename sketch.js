var nobita, nobitaI;
var bg, bg1;

function preload() {
  bg = loadImage("snow2.jpg");
  nobitaI = loadImage("nobita.jpeg");

}

function setup() {
  createCanvas(1600, 700);

  nobita = createSprite(50,600,20,50);
  nobita.addImage(nobitaI);

  bg1 = createSprite(700,690,1400,20);
  bg1.x=bg1.width/2;
  bg1.velocityX=-2;  

}

function draw() {
  background(bg); 

  if(bg1.x<0){
    bg1.x=bg1.width/2; }

  if(keyDown("space")){
    nobita.velocityY = -10;
  }
  
  nobita.velocityY = nobita.velocityY + 0.5;
  
  nobita.collide(bg1);
  

  drawSprites();
}

