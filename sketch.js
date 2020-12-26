var car, wall, speed, weight;

function setup() {
  createCanvas(1200,400);

  speed = random(25,60);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  
  
  if(car.isTouching(wall)){
    car.velocityX=0;
    wall.velocityX=0;
    car.shapeColor="red"
  }

  drawSprites();
}