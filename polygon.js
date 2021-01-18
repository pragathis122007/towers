class Polygon {
    
    
    
     
        constructor(x, y) {
          var options = {
            
              'restitution':1,
              'friction':1,
              'density':1.2
          }
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 50;
          this.height = 50;
          this.image = loadImage("polygon.png");
          World.add(world, this.body);
        }
        display(){
         
          var pos =this.body.position;
          
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,50,50);
       
          pop();
        }
       
        
       
      };