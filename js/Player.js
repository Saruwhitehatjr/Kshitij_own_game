class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("rex",playerAnimation);
		this.spt.scale=0.6;
		this.spt.debug=true;
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}

	moveLeft()
	{ 
		this.spt.x=this.spt.x-12;
	}

	moveRight()
	{ 
		this.spt.x=this.spt.x+12;
	}

	jump()
	{ 
		this.spt.velocityY=-30;
    }
	
    bullet()
    {
var b1= createSprite(this.spt.x,this.spt.y,10,10)
 b1.velocityX=13;
 b1.addAnimation("bullet",bullet)
 b1.scale=0.3
bulletGroup.add(b1)
b1.lifetime=300

    }
}




