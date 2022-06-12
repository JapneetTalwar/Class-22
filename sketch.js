const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine, world,ground;
let back,towerImg, tower;
let cannon;
let angle = 20

function preload() {
    back = loadImage("./assets/background.gif")
    towerImg = loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
  isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower = Bodies.rectangle(160,350,160,320,options);
 World.add(world,tower);

 cannon = new Cannon(180,110,130,100,angle);

}

function draw() {
  background(189);
  Engine.update(engine);
  
  image(back,0,0,1200,600);
  rect(ground.position.x, ground.position.y,width*2,1);
 
  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,320)
  
  pop()

  cannon.display()
}
