var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 100, 50, 50);
  fixedRect.shapeColor="orange";
 // fixedRect.velocityX=3;
  fixedRect.velocityY=5;
  movingRect=createSprite(200,200,50,100);
  movingRect.shapeColor="black";
  //movingRect.velocityX=-3;
  movingRect.velocityY=-5;
 fixedRect.debug=true;
movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 ){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
  }
  if( fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 ){
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      movingRect.velocityY=movingRect.velocityY*(-1);

  }
  /*movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 ){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="green";

  }
  else{
    fixedRect.shapeColor="orange";
    movingRect.shapeColor="black";
  }
  */
  drawSprites();
  
}