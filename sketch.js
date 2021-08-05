var ground,groundImage;
var hunter,hunterImage;

function preload(){
  groundImage=loadImage("ground.jpg");
  hunterImage = loadAnimation("hunter1.png","hunter2.png","hunter3.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  ground= createSprite(0,0,displayWidth,displayHeight);
  ground.velocityX=-3;
  ground.scale=1.8;
  ground.x=ground.width/2;
  
  ground.addImage(groundImage);

  hunter = createSprite(200,300,100,50)
  hunter.addAnimation("hunter",hunterImage)
  hunter.scale=0.7;
   
}

function draw() {
  background(0); 
if(ground.x<0){
  ground.x=ground.width/2;
}

  if(keyDown("space")) {
    hunter.velocityY=-5
    }
    hunter.velocityY=hunter.velocityY+0.5;
    
 
  drawSprites();
}
  
 
  