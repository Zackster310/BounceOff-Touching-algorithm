var fixedRect,movingRect;
var rect1,rect2;
var Hrect1,Hrect2;
var r,g,b;

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

  Hrect1 = createSprite(10,700,50,40);
  Hrect1.velocityX = 5

  Hrect2 = createSprite(1190,700,50,40);
  Hrect2.velocityX = -5
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  r = Math.round(random(0,90));
  g = Math.round(random(91,170));
  b = Math.round(random(171,255));


 if(isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor = r,g,b;
  movingRect.shapeColor = r,g,b;
 }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  bounceOff(rect1,rect2);
  
  bounceOff(Hrect1,Hrect2);

  drawSprites();
}

