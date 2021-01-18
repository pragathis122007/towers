const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var polygon1;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var slingshot1;

var backgroundImg;
var bg = "daybackground.png";
var score = 0;

function preload(){
     getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   

    ground = new Ground(600,350,1200,20);
    stand = new Ground(600,330,600,20);

    block1 = new Box(600,305,30,30);
    block2 = new Box(570,305,30,30);
    block3 = new Box(540,305,30,30);
    block4 = new Box(510,305,30,30);
    block5 = new Box(630,305,30,30);
    block6 = new Box(660,305,30,30);
    block7 = new Box(690,305,30,30);

    block8 = new Box(600,275,30,30);
    block9 = new Box(570,275,30,30);
    block10 = new Box(540,275,30,30);
    block11 = new Box(630,275,30,30);
    block12 = new Box(660,275,30,30);

    block13 = new Box(600,245,30,30);
    block14 = new Box(570,245,30,30);
    block15 = new Box(630,245,30,30);

    block16 = new Box(600,215,30,30);

    polygon1 = new Polygon(50,250);
    slingshot1 = new SlingShot(polygon1.body,{x:50,y:200});

  

    Engine.run(engine);
}

function draw(){
    if(backgroundImg)
         background(backgroundImg);

    background("red");

    noStroke();
    textSize(35)
    fill("white")
    text ("SCORE : "+score,750,40);

    Engine.update(engine);
    ground.display();
    stand.display();
    polygon1.display();

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();

    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();

    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();

    block16.display();
    block16.score();

    slingshot1.display();
    
    //score();

    drawSprites();

  
}


function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  
    Matter.Body.setPosition(polygon1.body, {x: 650 , y: 300});
      slingshot1.fly();
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(polygon1.body, {x: 50 , y: 250});
     slingshot1.attach(polygon1.body);
    }
}

//function score(){
  //if(polygon1.body = 650,300){
    //score = 500;
  //}
//}

async function getBackgroundImg(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "daybackground.png";
    }
    else{
        bg = "nightbackground.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    }