function createZombie(x){
    if(frameCount%100 === 0){
      var zombie = createSprite(x,50,20,20);
      zombie.velocityY = 2;
      zombie.shapeColor = "green";
      zombiesGroup.add(zombie);     
    }
}
function createZombie2(x){
  if(frameCount%100 === 0){
    var zombie2 = createSprite(x,50,20,20);
    zombie2.velocityY = 2;
    zombie2 .shapeColor = "green";
    zombiesGroup2.add(zombie2);   
  }
}
function createBullet(x) {
  var bullet= createSprite(100,100,5,10);
  bullet.y = 850;
  bullet.x = player1.player.x;                                           
  bullet.shapeColor = "red";
  bullet.velocityY = -4;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}

function infection(ZG,building){
    for(var i = 0;i<ZG.maxDepth();i++){
        var z = ZG.get(i);
        
        if(z != null)
        {
          for (var j=0;j<building.length;j++){
            var fl = building[j];
            if(z.isTouching(building[j].box)){
            building[j].box.shapeColor = "green";
            z.velocityY = 0.5;
            building[j].infection = true;
            }
          }
        }
      }

      if(z != null&&z.isTouching(player1.player)){
        life = life - 1;
        player1.player.x = 550;
        z.destroy();
        
      } 
}
       
     
function destroyZombie(ZGG){
  for(var i = 0;i<ZGG.maxDepth();i++){
    var o = ZGG.get(i);
    if(o != null&&bulletGroup.isTouching(o)){
      o.destroy();
      score = score + 15;
    }
  }
}

function createBuilding1(){

  for(var i=400; i<755;i=i+50){
    var floor = new Box(100,i,70,50);
    b1.push(floor);
  }
/*
  floor1 = new Box(100,750,70,50);
  floor2 = new Box(100,700,70,50);
  floor3 = new Box(100,650,70,50);
  floor4 = new Box(100,600,70,50);
  floor5 = new Box(100,550,70,50);
  floor6 = new Box(100,500,70,50);
  floor7 = new Box(100,450,70,50);
  floor8 = new Box(100,400,70,50);
  */
  
}
function createBuilding2(){

  for(var i=300; i<755;i=i+50){
    var floor = new Box(300,i,70,50);
    b2.push(floor);
  }/*
  floor9 = new Box(300,750,70,50);
  floor10 = new Box(300,700,70,50);
  floor11 = new Box(300,650,70,50);
  floor12 = new Box(300,600,70,50);
  floor13 = new Box(300,550,70,50);
  floor14 = new Box(300,500,70,50);
  floor15 = new Box(300,450,70,50);
  floor16 = new Box(300,400,70,50);
  floor17 = new Box(300,350,70,50);
  floor18 = new Box(300,300,70,50); 
  */
}
function createBuilding3(){
  for(var i=550; i<755;i=i+50){
    var floor = new Box(500,i,70,50);
    b3.push(floor);
  }
/*
  floor19 = new Box(500,750,70,50);
  floor20 = new Box(500,700,70,50);
  floor21 = new Box(500,650,70,50);
  floor22 = new Box(500,600,70,50);
  floor23 = new Box(500,550,70,50);
  */
}
function createBuilding4(){
  for(var i=450; i<755;i=i+50){
    var floor = new Box(700,i,70,50);
    b4.push(floor);
  }
/*
  floor24 = new Box(700,750,70,50);
  floor25 = new Box(700,700,70,50);
  floor26 = new Box(700,650,70,50);
  floor27 = new Box(700,600,70,50);
  floor28 = new Box(700,550,70,50);
  floor29 = new Box(700,500,70,50);
  floor30 = new Box(700,450,70,50);
  */
}
function createBuilding5(){
  for(var i=500; i<755;i=i+50){
    var floor = new Box(900,i,70,50);
    b5.push(floor);
  }

  /*floor31 = new Box(900,750,70,50);
  floor32 = new Box(900,700,70,50);
  floor33 = new Box(900,650,70,50);
  floor34 = new Box(900,600,70,50);
  floor35 = new Box(900,550,70,50);
  floor36 = new Box(900,500,70,50);*/
}
function createBuilding6(){
  for(var i=350; i<755;i=i+50){
    var floor = new Box(1100,i,70,50);
    b6.push(floor);
  }

  /*
  floor37 = new Box(1100,750,70,50);
  floor38 = new Box(1100,700,70,50);
  floor39 = new Box(1100,650,70,50);
  floor40 = new Box(1100,600,70,50);
  floor41 = new Box(1100,550,70,50);
  floor42 = new Box(1100,500,70,50);
  floor43 = new Box(1100,450,70,50);
  floor44 = new Box(1100,400,70,50);
  floor45 = new Box(1100,350,70,50);*/
}


function check(){
  //to check if the last floor is infected or not
  if(b1[b1.length-1].infection===true &&b2[b2.length-1].infection===true
    && b3[b3.length-1].infection===true&&b4[b4.length-1].infection===true
    && b5[b5.length-1].infection===true && b6[b6.length-1].infection===true)
  {
    gameState = "endbuilding";
  }
  
}