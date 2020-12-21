class Rope
{

    constructor(body1, body2, offsetX, offsetY)
    {
        
        var options = 
        {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY},
           // stiffness: 0.04,
           // length: 10
        }
        this.offsetX = offsetX
        this.offsetY = offsetY
        
         
        this.rope = Contsraint.create(options);
        World.add(world, this.rope);
    }

    /*fly()
    {
        this.sling.bodyA = null;
    }*/

    display()
    {

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        fill("white");

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
      
    }
    
}