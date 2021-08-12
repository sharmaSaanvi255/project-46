var ground,groundImage;
var hunter,hunterImage;
var logImage,stone,stoneImage,board,boardImage;
var invisibleGr;

function preload(){
  groundImage=loadImage("ground.jpg");
  hunterImage = loadAnimation("hunter1.png","hunter2.png","hunter3.png")
  logImage=loadImage("log.png");
  stoneImage=loadImage("stone.png")
  boardImage=loadImage("untitled.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  ground= createSprite(0,0,displayWidth,displayHeight);
  ground.velocityX=-3;
  ground.scale=1.8;
  ground.x=ground.width/2;
  
  ground.addImage(groundImage);

  invisibleGr=createSprite(200,450,displayWidth,10);
  invisibleGr.visible=false

  hunter = createSprite(200,450,100,50)
  hunter.addAnimation("hunter",hunterImage)
  hunter.scale=0.4;

  
  
 /*/ stone=createSprite(200,300,50,50)
  stone.addImage(stoneImage);
  stone.scale=0.2
log = createSprite(200,300,50,50); 
  log.addImage(logImage);
  board=createSprite(200,300,50,50)
  board.addImage(boardImage)
  stone.scale=0.2*/

   
}

function draw() {
  background(0); 
if(ground.x<0){
  ground.x=ground.width/2;
}

  if(keyDown("space")) {
    hunter.velocityY=-12
    }
    hunter.velocityY=hunter.velocityY+0.8;
    

 hunter.collide(invisibleGr);
 spawnLog();
 spawnStone();
 spawnBoard();

  drawSprites();
}
  
 function spawnLog(){
   if(frameCount%100===0) {
    var logs = createSprite(1000,Math.round(random(350,500)),50,50); 
    logs.addImage(logImage);
    logs.velocityX=-3;
    logs.scale=0.5;
   }

 }

 function spawnStone(){
   if (frameCount%150===0){
    var stone=createSprite(1000,Math.round(random(350,500)),50,50)
    stone.addImage(stoneImage);
  stone.scale=0.2
  stone.velocityX=-3
   }
 }

 function spawnBoard(){
   if (frameCount%200===0) {
    var board=createSprite(1000,Math.round(random(350,500)),50,50)
    board.addImage(boardImage)
  board.scale=0.2 
  board.velocityX=-3

   }
 }
  