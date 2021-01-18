class Box {
    constructor(x, y, width, height) {
      var options = {
        'restitution':1,
        'friction':1,
        'density':1.2
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
    
    display(){
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else {
        World.remove(world, this.body);
        push ();
        this.Visiblity = this.Visiblity - 5;
        tint (255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop ();
      }
     
    }
    
  };
  