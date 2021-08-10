function preload(){

seaImg=loadImage("sea.png");
shipImg= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
createCanvas(400,400);
var sea=createSprite(200,200,400,400);
sea.addImage(seaImg);
sea.velocityX=-3
if (sea.x<0){
 sea.x=sea.width/2;
}
var ship= createSprite(200,260,100,100);
  ship.addAnimation("ship",shipImg);
ship.scale=0.3;
} 

function setup(){

  
}

function draw() {
  background("blue");
  drawSprites();
}
