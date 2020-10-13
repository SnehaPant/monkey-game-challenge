
var monkey , monkey_running
 var obstacle, bananaImage, obstacleImage
var bananaGroup, obstacleGroup
var ground;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(30,315,20,20)
  monkey.addAnimation("moving", monkey_running); 
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background('white')
  stroke('white')
  textSize(20);
  fill('white');
  text("Score: "+ score, 500,50);
  
  stroke('black')
  textSize(20);
  fill('black')
  survivalTime=Math.ceil(frameCount/frameRate())
  text('Survival Time:'+ survivalTime,100,50);
  
   if(keyDown("space")){
        monkey.velocityY = -12;
      }
   monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  
  
  
  
drawSprites();
  food();
  obstacles();
}
function food(){
  if (frameCount % 80 === 0) {
     var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana);
  }
  
}
function obstacles(){
  if (frameCount % 300 === 0) {
    var  obstacle = createSprite(400,330,40,40);
   
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale = 0.1;
    obstacle.lifetime=120
      
   
    obstacleGroup.add(obstacle);
  }
  
}


