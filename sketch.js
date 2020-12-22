//creating global variables
var monkey, monkeyImg;
var banana, bananaImg, bananaGroup;
var obstacles, obstaclesImg, obstaclesGroup;
var back,backImg;
var ground;
var score = 0;
var time = 0;
function preload(){
monkeyImg = loadAnimation("image/Monkey_01.png", "image/Monkey_02.png","image/Monkey_03.png", 
"image/Monkey_04.png", "image/Monkey_05.png","image/Monkey_06.png","image/Monkey_07.png","image/Monkey_08.png",
"image/Monkey_09.png",  "image/Monkey_10.png");
backImg = loadImage("image/jungle.jpg");
bananaImg = loadImage("image/banana.png")
obstaclesImg = loadImage("image/stone.png");
}
function setup(){
  createCanvas(displayWidth, displayHeight);
  ground = createSprite(displayWidth/2, 570, displayWidth, 5);
  ground.visible = false
  monkey = createSprite(60, 500);
  monkey.addAnimation("running",monkeyImg);
  monkey.velocityX = 10
  monkey.scale = 0.2;
  obstaclesGroup= createGroup();
  bananaGroup= createGroup();
  obstacles = createSprite(600, 520);
  obstacles.addImage(obstaclesImg);
  obstacles.scale = 0.3;
  obstacles.velocityX = -10;
}
function draw(){
  camera.position.x = monkey.x
  if(ground.x < camera.position.x){
    ground = createSprite(camera.position.x/2, 570, camera.position.x, 5);
  }
  background(backImg);
  time = time + (Math.round(frameRate())/100)
  if(ground.x<(camera.position.x - 1)){
    ground.x = camera.position.x/2;
  }
  if (touches.length>0||keyDown("space")&& monkey.y >=300) {
    monkey.velocityY = -10;
    touches = [];
  }
  monkey.velocityY +=0.8
  monkey.collide(ground);
  myBanana();
  barrier();
  if (bananaGroup.isTouching(monkey)) {                    
    bananaGroup.destroyEach();
    score += 2;
    switch(score){
      case 10: monkey.scale+= 0.02
      break;
      case 20: monkey.scale+=0.02;
      break;
      case 30: monkey.scale+=0.02;
      break;
      case 40: monkey.scale+=0.02;
      break;
      case 50: monkey.scale+=0.02;
      break;
      case 60: monkey.scale+=0.02;
      break;
      case 70: monkey.scale+=0.02;
      break;
      case 80: monkey.scale+=0.02;
      break;
      case 90: monkey.scale+=0.02;
      break;
      case 100: monkey.scale+=0.02;
      break;
      default: break;
    }
  }
   if(obstaclesGroup.isTouching(monkey)){
    obstaclesGroup.destroyEach();
    monkey.scale = 0.2;

  }
  drawSprites();
  textSize(20);
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE : "+ score, camera.position.x + 300, 20);
  text("TIME : "+time, camera.position.x  + 300, 50);
  ground.visible = false
  //camera.position.y = displayHeight
}
function myBanana(){
  if(frameCount%70===0){
    banana = createSprite(camera.position.x + 700 ,Math.round(random(200, 400)))
    banana.addImage(bananaImg);
    banana.velocityX = 0;
    banana.scale= 0.1;
    banana.lifetime = 250;
    bananaGroup.add(banana);
  }
}
function barrier() {
  if(frameCount%100===0){
    obstacles = createSprite(camera.position.x + 700, 530);
    obstacles.addImage(obstaclesImg);
    obstacles.scale = 0.3;
    obstacles.velocityX = 0;
    obstacles.lifetime = 300;
    obstaclesGroup.add(obstacles);
  }
}
