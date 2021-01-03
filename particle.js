class Particle
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.5,
            }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);

    }
    display()
    {
    var paperpos=this.body.position;

    push()
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill(this.color);
    ellipse(paperpos.x,paperpos.y,this.r,this.r);
    pop()

    }
   }
