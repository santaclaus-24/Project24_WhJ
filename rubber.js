class Rubber{
    constructor(x,y,radius,options){
        var options={
            "restitution": 0.3,
            "friction":5,
            "density":1

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 75;
        //this.h = h;
        World.add(world,this.body);
    }
    display(){
        var P = this.body.position;
        var angle = this.body.angle;
        push()
        translate(P.x, P.y);
        rotate(angle);
        ellipseMode(CENTER); 
        fill ("green");
        strokeWeight(4);
        
        ellipse(0, 0, this.radius);
        pop()
    }
}