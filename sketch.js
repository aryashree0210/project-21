var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor=color(80,80,80);

  wall=createSprite(700,200,60,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(255,255,255); 
  
 if(hasCollided(bullet,wall)){

  //check the damage of the bullet 
  bullet.velocityX = 0;
    var damage = (0.5 * weight * speed)/(thickness*thickness*thickness)
    if(damage < 10){
      bullet.shapeColor = "green";
    }
    else{
      bullet.shapeColor = "red";
    }
 }

 

  drawSprites();
}


function hasCollided(object1,object2){
    var bulletRightEdge = object1.x + object1.width;
    var wallLeftEdge = object2.x;

    if(bulletRightEdge > wallLeftEdge){
        return true;
    }
    else{
      return false;
    }
}