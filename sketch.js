var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(1250, 550);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;




	helicopterSprite = createSprite(width / 2, 100, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 10, 1250, 20);
	groundSprite.shapeColor = "grey";




	packageBody = Bodies.circle(width / 2, 100, 5, { restitution: 3, isStatic: true });
	World.add(world, packageBody);



	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	if (keyDown("left")) {
		helicopterSprite.x = helicopterSprite.x - 10;
	}
	if (keyDown("right")) {
		helicopterSprite.x = helicopterSprite.x + 10;
	}
	
	keyPressed();
	drawSprites();


}

function keyPressed() {
	if (keyWentDown("down")) {
		pack_options = { restitution: 1.0 }
		packageSprite = createSprite(width / 2, 100, 10, 10, pack_options);
		packageSprite.addImage(packageIMG)
		packageSprite.scale = 0.2
		packageSprite.velocityY = 5;
		

	}

}


