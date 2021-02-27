
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, ground, rubber, iron;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8;

function preload(){

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100,100);
	stone = new Stone(700,320,70,70);
	ground = new Ground(400,height,800,25);
	rubber = new Rubber(600,90,30,30);
	iron = new Iron(500,100,70,70);

	sand1 = new Sand(250,105,5,5);
	sand2 = new Sand(300,107,5,5);
  sand3 = new Sand(400,10,5,5);
	sand4 = new Sand(500,20,5,5);
  
	sand5 = new Sand(350,70,5,5);
	sand6 = new Sand(150,10,5,5);
	sand7 = new Sand(450,100,5,5);
	sand8 = new Sand(500,100,5,5);
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  hammer.display();

  stone.display();
  ground.display();
  rubber.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();

  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
}



