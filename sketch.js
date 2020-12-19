
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(100,750,80);
	ground=new Ground(400,690,800,20);
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paperObject.display();
  ground.display();
  //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



