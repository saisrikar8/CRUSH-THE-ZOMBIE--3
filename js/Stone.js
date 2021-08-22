class Stone{
    constructor(x, radius){
        var options = {
            restitution: 0.2,
            friction:0.1
        };

        this.body = Bodies.circle(x, -(radius), radius, options);
        this.radius= radius;
        this.image = loadImage("/assets/stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
        pop();
    }
}