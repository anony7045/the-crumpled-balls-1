
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
	paperObject=new Paper(100,650,80);
	ground=new Ground(400,690,800,20);
	Engine.run(engine);
	bs1=new Ground(width/2,665,160,10);
	//bs1.shapeColor=color("red");

	bs2=new Ground(320,620,10,99);
	//bs2.shapeColor=color("red");

	bs3=new Ground(480,620,10,99);
	//bs3.shapeColor=color("red");
}


function draw() {
 // rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paperObject.display();
  ground.display();
  bs1.display();
  bs2.display();
  bs3.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:185,y:-185});
	}
}



