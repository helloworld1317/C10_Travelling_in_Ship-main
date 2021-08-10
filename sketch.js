function preload(){

seaImg=loadImage("sea.png");
shipImg= loadAnimation("ship-1.png","ship-2.png");
createCanvas(400,400);

}

function setup(){
  var sea=createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.velocityX=-3
  if (sea.x<0){
  
  }
  var ship= createSprite(200,260,100,100);
    ship.addAnimation(shipImg);
  ship.scale=0.3;
  
}

function draw() {
  background("blue");
  drawSprites();
}
