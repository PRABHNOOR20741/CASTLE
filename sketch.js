const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
  var canvas = createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new CastleG(400,590,800,20);

  Brick1 = new Bricks(400,480,96,200);
  Brick2 = new Bricks(500,430,100,300);
  Brick3 = new Bricks(300,430,100,300);
  Brick4 = new Bricks(565,380,50,400);
  Brick5 = new Bricks(245,380,50,400);

  Brick6 = new Bricks(400,370,50,20);
  Brick7 = new Bricks(495,265,50,30);
  Brick8 = new Bricks(310,265,50,30);
  Brick9= new Bricks(570,160,25,40);
  Brick10 = new Bricks(240,160,25,40);

  Brick11 = new Bricks(400,210,10,300);
  Brick12 = new Bricks(450,100,90,50);
}

function draw()
 {
  background(255,255,255); 
  Engine.update(engine); 

  ground.display();
  Brick1.display();
  Brick2.display();
  Brick3.display();
  Brick4.display();
  Brick5.display();
  Brick6.display();
  Brick7.display();
  Brick8.display();
  Brick9.display();
  Brick10.display();
  Brick11.display();
  Brick12.display();
}