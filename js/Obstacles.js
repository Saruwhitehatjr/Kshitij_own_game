class Obstacle {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where obstacle will be created  
      this.ry = height-random([220,420,620]);   //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("enemy",enemyAnimation);
      //this.spt.addAnimation("obstacle",obstacleAnimation);
      //this.spt.scale=0.03;
      this.spt.velocityX=-2;
      this.spt.debug=true;
      this.spt.collide(platformGroup)
    }

    
	jump()
	{ 
		this.spt.velocityY=-30;
    }
	
    applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}
}
  