class Particles{
    constructor(x,y,r) {
      var options = {
        isStatic:true,
        restitution:1,
        friction:0,
        density:0.8
          
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
        var groundPos=this.body.position;
        var angle = this.body.angle;		

			push();
			translate(groundPos.x, groundPos.y);
            rotate(angle);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(this.color)
			ellipse(0,0,this.r, this.r);
			pop();
  }
}