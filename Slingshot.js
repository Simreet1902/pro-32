class Slingshot {
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 5,
            stiffness: 0.004
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
      if(this.sling.bodyA != null){
        strokeWeight(4);
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
     }
      }

       

    fly(){
        this.sling.bodyA = null;
    }
}