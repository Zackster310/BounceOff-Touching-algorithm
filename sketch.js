var fixedRect,movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(1150,10,100,50);
  rect2 = createSprite(1150,790,100,50);

  rect1.velocityY = 5;
  rect2.velocityY = -5;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
     movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
     rect2.x - rect1.x < rect1.width/2 + rect2.width/2){
      rect1.velocityX = rect1.velocityX * -1;
      rect2.velocityX = rect2.velocityX * -1;
  }

  if(rect1.y - rect2.y < rect1.height/2 + rect2.height/2 && 
    rect2.y - rect1.y < rect1.height/2 + rect2.height/2){
     rect1.velocityY = rect1.velocityY * -1;
     rect2.velocityY = rect2.velocityY * -1;
 }

  drawSprites();
}