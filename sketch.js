const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

var bimg


function preload() {
  bimg=loadImage("./assets/background.gif");
  towerImage=loadImage("./assets/tower.png")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
var options={isStatic:true}
ground=Bodies.rectangle(0,590,0,0,options)
World.add(world,ground)
tower=Bodies.rectangle(80,180,0,0,options)
World.add(world,tower)
 cannon=new Cannon(180,110,110,50,angle) 

}

function draw() {
  background(189);
  image(bimg,0,0,width,height)
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,1200,2);
  image(towerImage,tower.position.x,tower.position.y,160,320)
  cannon.display()
}
