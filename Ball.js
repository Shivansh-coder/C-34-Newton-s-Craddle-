class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            density:0.8,
            restitution:1,
            frictionAir:0,
            friction:1,
            slope:1,
            inertia:Infinity
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);

        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.radius*2,this.radius*2);
        pop();
    }
}