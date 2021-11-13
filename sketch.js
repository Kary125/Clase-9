var caja;
function setup() {
  createCanvas(400,400);
  caja= createSprite (200,200,30,30)
}

function draw() 
{
  background("pink");
  if (keyIsDown(RIGHT_ARROW)) {
    caja.position.x= caja.position.x+ 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    caja.position.x= caja.position.x- 5;
  }
drawSprites ();
}




