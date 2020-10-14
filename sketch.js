var bullet , walls , thickness;
var weight , speed , lbullet , lwalls;

function setup() {
  createCanvas(1600,400);
  speed = random(215,301)
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  thickness = random(40,70);

  walls = createSprite(1200, 200, thickness, height/2);
  walls.shapeColor = color("yellow");
}

function draw() {
  background(0);
  drawSprites();
}

function hasCollided(lbullet,lwalls){
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwalls.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
}
if(hasCollided(bullet,walls)){
  bullet.velocityX = 0;
  var damage = 0.5 * speed * speed/(thickness * thickness * thickness);

  if(damage>30){
    walls.shapeColor = color(255);
  }

  if(damage<30){
    walls.shapeColor = color("red");
  }
}