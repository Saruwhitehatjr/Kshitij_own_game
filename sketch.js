var building1,building2;
var bulletGroup,platformGroup,enemyGroup,enemybulletGroup;
var life=5
function preload()
{
bg=loadImage("img/BG.gif","img/BG2.gif")
building1=loadAnimation("img/building1.png")
building2=loadAnimation("img/building2.png")
bullet=loadAnimation("img/bullet.png")
playerAnimation=loadAnimation("img/M1.png","img/M2.png","img/M3.png","img/M4.png","img/M5.png","img/M6.png")
enemyAnimation=loadAnimation("img/e7.png","img/e8.png","img/e9.png","img/e10.png","img/e11.png") 
}
function setup() {
  createCanvas(displayWidth,600);
  bulletGroup= createGroup();
  enemybulletGroup=createGroup()
  enemyGroup= createGroup();
  var countDistanceX = 0;
  var gap;


  

  platformGroup= createGroup();
  for (var i=0;i<20;i++)
  {
    frameRate(30);
     platform = new Platform(countDistanceX);
     platformGroup.add(platform.spt);//Adding each new platform to platformGroup
     gap=random([300,100,200,75,10]);//givin randome value to gap
     countDistanceX = countDistanceX + platform.spt.width + gap; 
     platform.spt.debug=true;//counting x location of next platform to be build

     if(i%2===0)
    { 
      obstacle=new Obstacle(countDistanceX)
      
      enemyGroup.add(obstacle.spt)
   }
 

  }

  player=new Player();
}

function draw() {

  background(bg);  
  translate(  -player.spt.x + width/2 , 0);
  player.spt.collide(platformGroup)
  //enemyGroup.collide(platformGroup)
  
  //enemyGroupjump();
  //enemyGroup.setVelocityEach(-3,2)

 
  if (keyDown("left"))
  {
    player.moveLeft()
  }
  if (keyDown("right"))
  {
    player.moveRight()
  }
  if (keyDown("up"))
  {
    player.jump()
   
  }
  player.applyGravity()

 if (keyWentDown("space"))
  {
    player.bullet()
   
  }
 // obstacle.jump();
 // obstacle.applyGravity()

 if(bulletGroup.isTouching(enemyGroup))
 {
   enemyGroup.destroyEach()
   bulletGroup.destroyEach()
 }

 //enemy AI -jump up and gravity 
 enemyGroup.overlap(platformGroup,function(en,pl){
   en.velocityY=-5
 })
 for(var i=0;i<enemyGroup.length;i++){
  enemyGroup[i].velocityY+=3
  
}

enemybulletGroup.overlap(player.spt,function(en,pl){
 life=life-1;
 en.destroy()
})
enemyGroup.overlap(player.spt,function(en,pl)
{
  console.log("hi")
  life-life-1;
  en.destroy()

})



  drawSprites();
  textSize(30)
  text("SCORE: "+life,width-100,20)
  healthbar()

  
}

function healthbar()
{
  push()
  
  fill ("white")
  rect (width/2,20,300,20);
  text("SCORE",width/2,20)
  fill("#f50057");
  rect(width/2,20,life*50,20);
  pop()
}

//background X2
//add obstacle animation
//add bullet animation
//add buliding animation
//adjust collider bulildings,enemy;
//add ai to enemy
//checkpost image
//player score
//gamestate