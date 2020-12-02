
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var number = 1;
var box1;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(1250, 550);
	engine = Engine.create();
	world = engine.world;

	


	helicopterSprite = createSprite(width / 2, 100, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;
	World.add(world, helicopterSprite);


	pack_options = { restitution: 1.0, friction: 1.0, density: 1 };
	packageSprite = createSprite(helicopterSprite.x, 100, 10, 10, pack_options);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;
	packageSprite.velocityY = 5;
	World.add(world, packageSprite);
	packageSprite.visible = false;

	World.add(world, packageSprite);


	ground_options = {
		isStatic: true
	}
	groundSprite = createSprite(width / 2, height - 10, 1250, 20, ground_options);
	groundSprite.shapeColor = "grey";
	World.add(world, groundSprite);




	ground_prop = {
		isStatic: true
	}
	ground = Bodies.rectangle(width / 2, 650, width, 10, ground_prop);
	World.add(world, ground);





	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
	background(0);

	textSize(20);
	fill("white");
	stroke("grey");
	text("CHANCES LEFT : " + number, 200, 20);

	if (keyDown("left")) {
		helicopterSprite.x = helicopterSprite.x - 10;
	}
	if (keyDown("right")) {
		helicopterSprite.x = helicopterSprite.x + 10;
	}

	if (keyWentDown("down") && (number > 0)) {
		packageSprite = createSprite(helicopterSprite.x, 100, 10, 10, pack_options);
		packageSprite.addImage(packageIMG);
		packageSprite.scale=0.2;
		packageSprite.velocityY=5;
		packageSprite.visible = true;
		number = number - 1;
	}

	if (packageSprite.y > 500) {
		packageSprite.velocityY = 0;
	}

	if (number == 0) {
		number = "GAME OVER!!!";
	}



	drawSprites();


}





