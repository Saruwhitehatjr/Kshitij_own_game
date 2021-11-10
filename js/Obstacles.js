class Obstacle {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where obstacle will be created  
      this.ry = height-random([220,420,620]);   //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("enemy",enemyAnimation);
      //this.spt.addAnimation("obstacle",obstacleAnimation);
      this.spt.scale=0.7;
      this.spt.velocityX=-4;
      this.spt.debug=true;
      this.spt.collide(platformGroup)
      this.spt.setCollider("rectangle",-100,0,300,150)
      this.spt.lifetime=300

      this.obstBullet=createSprite(this.rx, this.ry,10,10)
      this.obstBullet.addAnimation("bullet",bullet)
      this.obstBullet.scale=0.2
      this.obstBullet.velocityX=-5
      this.obstBullet.lifetime=400
      enemybulletGroup.add(this.obstBullet);
    }

    


  
}
  