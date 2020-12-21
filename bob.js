class Bob
{
    constructor(x,y,r)
    {
        var options = 
        {
            restitution: 0.5,
            friction: 0.5,
            density: 0.5

        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r,options);


        World.add(world, this.body);

        
    }

    display()
   {
    
    push()
    //ellipseMode(RADIUS);
    fill("pink");
    ellipse(this.body.position.x,this.body.position.y,this.r * 2,this.r * 2);
    pop()
    
   }
}