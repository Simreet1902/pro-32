const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14,
    block15;

var base1, base2, slingshot;

var polygon, polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  //createSprite(400, 200, 50, 50);

  ground = new Ground(400,350,800,20);

  base1 = new Ground(390,260,180,10);
  base2 = new Ground(640,170,120,10);

  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);

  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);

  block9 = new Box(390,155,30,40);

  block10 = new Box(610,150,30,30);
  block11 = new Box(640,150,30,30);
  block12 = new Box(670,150,30,30);

  block13 = new Box(625,120,30,30);
  block14 = new Box(655,120,30,30);

  block15 = new Box(640,90,30,30);

  polygon = new Polygon(100,100);
  //World.add(world, polygon);

  slingshot = new Slingshot(polygon.body,{x:100, y:100});

 
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();

  block9.display();

  base1.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

  block15.display();

  base2.display();

  polygon.display();

  slingshot.display();
 
  drawSprites();
}

function mouseDragged(){

   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
 
  slingshot.fly();
  
}

