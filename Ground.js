class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display(){
        var P = this.body.position;
        rectMode(CENTER); 
        fill ("brown");
        rect(P.x, P.y, this.w,this.h);
    }
}