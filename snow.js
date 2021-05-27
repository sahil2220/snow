class snow  {
    constructor(x, y) {
        var options = {
            restitution: 0,
            friction: 0,
            isStatic:false,
            density:1
        }
        this.r = 20;
        this.image=loadImage("snow4.webp")
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};