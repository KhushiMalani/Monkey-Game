
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground, invisibleGround;
var survivalTime=0;

function preload(){
  
  
  monkey_running =loadImage("sprite_2.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,200); 
ground= createSprite(300,180,2000,20);
ground.velocityX=-10; 
monkey= createSprite(50,180, 300,100);
//monkey.addImage(monkey_running);

monkey.scale=0.1;
obstacleGroup= new Group();
foodGroup= new Group();

  invisibleGround = createSprite(300,190,2000,20);
  invisibleGround.visible = false;
}


function draw() {
background(220);
  if(keyDown("space")) {
      monkey.velocityY = -12;
    console.log("khushi");
    }
  if(ground.x<0){

ground.x=ground.width/2;
  }
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(invisibleGround);
createObstacles();
createFood();
survivalTime=Math.ceil(frameCount/frameRate());
text("Survival Time:"+survivalTime, 100,50);
stroke("black");
textSize(20);
fill("black");
 drawSprites(); 
}
function createObstacles(){
if(frameCount% 300==0){
  obstacle=createSprite(150,160) 
  obstacle.addImage(obstacleImage);
  obstacle.lifetime=120;
  obstacleGroup.add(obstacle);
 obstacle.scale=0.1;
  obstacle.velocityX=-5;
 obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
}
} 
function createFood(){
  if (frameCount% 80==0){
    banana= createSprite(300,50);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(80,160));
    banana.velocityX=-6;
    banana.lifetime=100;
    foodGroup.add(banana);
  }
}





