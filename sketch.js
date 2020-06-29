
var zombiesGroup,zombiesGroup2;
var score=0;
var player;
var bulletGroup;
var life = 3;
var gameState = "play";
var infectedFloorCount = 0;
var b1=[],b2=[],b3=[],b4=[],b5=[],b6=[];
var floorInfection = 0;
function setup() {
  createCanvas(1200,850);
  zombiesGroup = new Group();
  zombiesGroup2 = new Group();
  bulletGroup = new Group();
  createBuilding1();
  createBuilding2();
  createBuilding3();
  createBuilding4();
  createBuilding5();
  createBuilding6();
  helicopter1 = new Helicopter(100,50,50,50);
  helicopter2 = new Helicopter(1100,50,50,50);
  player1 = new Player(100,800,50,50);
}

function draw() {
  background("white"); 

  
  fill("red");
  line(0,100,1200,100); 
  line(0,800,1200,800);
  line(1200,100,1200,800);
  

  text("SCORE:"+score,100,300);
  text("LIVES LEFT:"+life,100,250);

  //What all should happen in gamestate PLAY
  if(gameState === "play"&&life>0){
  
      player1.player.x = mouseX;
      if(helicopter1.helicopter.x>1200){
        helicopter1.helicopter.x = 0;
      }
      if(helicopter2.helicopter.x>1200){
        helicopter2.helicopter.x = 0;
      }
      if(keyDown("space")){
        createBullet(player1.player.x);
      }
      
    // console.log(infectedFloorCount);
      createZombie(helicopter1.helicopter.x);
      createZombie2(helicopter2.helicopter.x);
      //infection(zombiesGroup);
      //infection(zombiesGroup2);

      infection(zombiesGroup,b1)
      infection(zombiesGroup,b2)
      infection(zombiesGroup,b3)
      infection(zombiesGroup,b4)
      infection(zombiesGroup,b5)
      infection(zombiesGroup,b6)

      infection(zombiesGroup2,b1)
      infection(zombiesGroup2,b2)
      infection(zombiesGroup2,b3)
      infection(zombiesGroup2,b4)
      infection(zombiesGroup2,b5)
      infection(zombiesGroup2,b6)
      
      destroyZombie(zombiesGroup);
      destroyZombie(zombiesGroup2);
      check();
}
if(life === 0){
  gameState = "endlife";
}

if(gameState==="endbuilding"){
  push();
  fill("red");
  textSize(20);
  text("All BUILDINGS are infected!!! GAME OVER",400,200);
  pop();
  
}
if(gameState==="endlife"){
  push();
  fill("red");
  textSize(20);
  text("You are zombozzzzized!! GAME OVER",400,200);
  pop();
}

  drawSprites();
}