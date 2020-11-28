var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var number=5;

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
	textSize(20);
	fill("white")
	stroke("grey");
	text("CHANCES LEFT : "+number,200,20 );

	if (keyDown("left")) {
		helicopterSprite.x = helicopterSprite.x - 10;
	}
	if (keyDown("right")) {
		helicopterSprite.x = helicopterSprite.x + 10;
	}

	if (keyWentDown("down")&&(number>0)) {
		pack_options = { restitution: 1.0 }
		packageSprite = createSprite(helicopterSprite.x, 100, 10, 10, pack_options);
		packageSprite.addImage(packageIMG)
		packageSprite.scale = 0.2
		packageSprite.velocityY = 5;
		number=number-1;
	}

	if(number==0){
		number="GAME OVER!!!";
	}






	drawSprites();


}


function isTouching(object1, object2) {
	if (
		(object1.x - object2.x < object1.width / 2 + object2.width / 2) &&
		(object2.x - object1.x < object1.width / 2 + object2.width / 2) &&
		(object1.y - object2.y < object1.height / 2 + object2.height / 2) &&
		(object2.y - object1.y < object1.height / 2 + object2.height / 2)
	) {
		return true;
	}
	else {
		return false;

	}
}



