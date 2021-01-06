//code starts
//create variables
var canvas;

//create game elements
var gameState=0;
var PaddleBasedWall,PaddleBasedWallButton1,PaddleBasedWallButton2;
var backgroundIMG;
var WaterCircleDoor,FireCircleDoor;
var greenGoose;
var waterCircle,FireCircle;
var FireImg;
var WaterImg;
var levelCounter =0;
var TimeUsed;
var water;
var water1;
var water2;
var waterGroup
var fire;
var ground,ground1,ground2,ground3;
var GGroup;
var invisibleGround;
//start function preload
function preload(){
  //preload images
backgroundIMG = loadImage("background.jpg");
FireImg=loadImage("FireCircle Image1.png");
WaterImg=loadImage("WaterCircle Image1.png");
}
//end function preload

//start function setup
function setup(){
  //make a canvas using variable and create canvas function
    canvas = createCanvas(1200,800);

    waterGroup = new Group()
    GGroup = new Group()
    //add colour brown to the rectangles
    fill("brown")
  rect(0,770,1200,30)
  rect(1200,570,-1000,30)
  rect(0,370,1000,30)
  rect(1200,170,-1000,30)

  //create player charaters
  waterCircle=createSprite(1100,770,20,20);
  FireCircle=createSprite(1160,770,20,20);

  //add images to player characters and scale them
  FireCircle.addImage(FireImg)
  FireCircle.scale=0.15;
 waterCircle.addImage(WaterImg)
 waterCircle.scale=0.15;
  
 //create fire
  fire=new FireBall(1000,770,100,10,"red")

//create water
 water2 = new obstacle(500,770,100,10,"blue");
 water = new obstacle(500,370,150,10,"blue")
 water1 = new obstacle(675,170,350,10,"blue")
//waterGroup.add(water2)
 //create a help to reach the second floor
  drawBalancersAndAdaptiviters(200,770,20,10,"orange");
  drawBalancersAndAdaptiviters(50,770,100,10,"orange");
  drawBalancersAndAdaptiviters(250,570,20,10,"orange");

  //create goose
 var goose=  createSprite(500,570,100,10)
goose.shapeColor="green";
  //create a help to reach the third floor
  drawBalancersAndAdaptiviters(800,550,50,50,"grey")

  //create fire
  var fire1 = new FireBall(800,370,150,10,"red")


//waterGroup.add(water)

 //create a help to reach the forth/last floor of level 1
  drawBalancersAndAdaptiviters(50,345,100,120,"brown")

  //create fire
  var fire2 = new FireBall(300,170,150,10,"red")

  //create water
//waterGroup.add(water1)

 //create help for firecircle to cross the last water with x position 675,y position of 170, width of 350 and height of 10
  drawBalancersAndAdaptiviters(800,160,99,10,"red")

  //create goals
  drawGoals(1000,130,88,100,"red")
  drawGoals(1100,130,88,100,"blue")

  //create floors
 ground = createSprite(600,790,1200,30)
 ground.shapeColor="brown"
 //GGroup.add(ground)
  ground1 = createSprite(700,590,-1000,30,"brown")
  ground1.shapeColor="brown"
  ground2=createSprite(600,390,1000,30)
  ground2.shapeColor="brown"
  ground3=createSprite(700,190,-1000,30)
  ground3.shapeColor="brown"
invisibleGround = createSprite(600,800,1200,30)
invisibleGround.visible=false;
}
//end function setup

//start function draw
function draw(){
  //stop repition
  background(backgroundIMG);

  //create TimeUsed for feedback
  TimeUsed=Math.round(World.frameCount/60)
  console.log(TimeUsed)
  //add Controls for FireCircle
  if(keyDown(LEFT_ARROW)){
    FireCircle.x=FireCircle.x-1
  }
  if(keyDown(RIGHT_ARROW)){
    FireCircle.x=FireCircle.x+1
  }
  FireCircle.velocityY=FireCircle+0.5
if(keyDown(UP_ARROW)){
FireCircle.velocityY=-4
}
FireCircle.collide(invisibleGround)
//FireCircle.collide(GGroup)
  //Add controls for WaterCircle
 if(keyDown("A")||keyDown("a")){
   waterCircle.x=waterCircle.x-1;
 }
 if(keyDown("d")||keyDown("D")){
   waterCircle.x=waterCircle.x+1;
 }
 waterCircle.velocityY=+4
   if(keyDown("w")||keyDown("W")){
     waterCircle.velocityY=-4;
   }
   waterCircle.collide(invisibleGround)
 //debug the below commented section
 //try to end the game if firecircle is touching the water
 //if(FireCircle.isTouching(waterGroup)){
 //FireCircle.destroy();
 //gameState=1;
 //}
 //call a function drawSprites to draw objects/elements of the game
drawSprites()
}
//end function draw

//start function drawBalancersAndAdaptiviters
//accept argument x,y,width,height,shapeColor
function drawBalancersAndAdaptiviters(x,y,width,height,shapeColor){
  //add code to create sprite
  this.Balancers=createSprite(x,y,width,height);

  //add code to add shape color to sprite
  this.Balancers.shapeColor=shapeColor;
  }
  //end funtion drawBalancersAndAdaptiviters

  //start function drawDiamonds
  //accept argument x,y,width,height,shapeColor
  function drawDiamonds(x,y,width,height,shapeColor){
      //add code to create sprite
    this.diamonds=createSprite(x,y,width,height);

      //add code to add shape color to sprite
    this.diamonds.shapeColor=shapeColor;
    }
    //end function drawDiamonds

    //start function drawGoals
      //accept argument x,y,width,height,shapeColor
    function drawGoals(x,y,width,height,shapeColor){
            //add code to create sprite
      this.goal=createSprite(x,y,width,height);

           //add code to add shape color to sprite
      this.goal.shapeColor=shapeColor;
      }
      //end function drawGoals