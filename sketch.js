
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var number =20;
var box1;
var con1;

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


	con1=createSprite(500,520,100,20);
	con1.shapeColor="red";
	con2=createSprite(450,480,20,100);
	con2.shapeColor="red";
	con3=createSprite(550,480,20,100);
	con3.shapeColor="red";
	con1.velocityX=5;
	con2.velocityX=5;
	con3.velocityX=5;


	


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

	if (keyWentDown("down") &&(number=="CORRECT !!NOW DROP THE PACKAGE")) {
		packageSprite = createSprite(helicopterSprite.x, 100, 10, 10, pack_options);
		packageSprite.addImage(packageIMG);
		packageSprite.scale=0.2;
		packageSprite.velocityY=15;
		packageSprite.visible = true;
		number = number - 1;
	}

	if (packageSprite.y > 480) {
		packageSprite.velocityY = 0;
	}

	if (number == 0) {
		number = "GAME OVER!!!";
	}

	if(isTouching(con1,packageSprite)){
		number="CORRECT !!NOW DROP THE PACKAGE";
	}else{
		number="TRY";
	}

	if(con1.x>1100){
		con1.velocityX=-5;
		con2.velocityX=-5;
		con3.velocityX=-5;
	} else if(con1.x<150){
		con1.velocityX=5;
		con2.velocityX=5;
		con3.velocityX=5;
	}
	
	if(packageSprite.isTouching(con1)&&packageSprite.x==480){
		packageSprite.x=con1.x;
		packageSprite.y=con1.y-10;
	}



	drawSprites();


}


function isTouching(  object1, object2) {
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





