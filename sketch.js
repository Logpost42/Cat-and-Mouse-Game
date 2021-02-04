var Cat,Mouse,garden;

var CI1,CA,CI4,MI1,MA,MI4,gardenI;


function preload() {
    //load the images here
    CI1 = loadImage("cat1.png");
    CA = loadAnimation("cat2.png","cat3.png");
    CI4 = loadImage("cat4.png");

    MI1 = loadImage("mouse1.png");
    MA = loadAnimation("mouse2.png","mouse3.png");
    MI4 = loadImage("mouse4.png");

   gardenI = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  
    garden = createSprite(500,400);
    garden.addImage(gardenI);
    garden.scale = 1.5;
  
    Cat = createSprite(800,600);
    Cat.addImage(CI1);
    Cat.scale = 0.2;

    Mouse = createSprite(200,600);
    Mouse.addImage(MI1);
    Mouse.scale = 0.2;
  
    

}

function draw() {
    text(mouseX + "," + mouseY,10,45)
    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(Cat.x - Mouse.x < (Cat.width - Mouse.width)/2){
        Cat.addAnimation("cat stopped",CI4);
        Cat.changeAnimation("cat stopped");
        Cat.velocityX = 0;
        Cat.x = 250;

        Mouse.addAnimation("mouse stopped",MI4);
        Mouse.changeAnimation("mouse stopped");
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
      Cat.velocityX = -5;
      Cat.addAnimation("cat running",CA);
      Cat.changeAnimation("cat running");

      Mouse.addAnimation("mouse taunt",MA);
      Mouse.changeAnimation("mouse running");
  }
}