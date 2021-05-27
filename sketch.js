const Engine= Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world


var snows = [];

function preload() {
  bgImg=loadImage("snow3.jpg")
 
}

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create()
  world=engine.world
  
 
  
}

function draw() {
  background(bgImg);
  
  
   
 // if(frameCount%10===0){
    snows.push(new snow(random(width/8-10,width-10), 10,10));
    
    Engine.update(engine);

    for (var s = 10; s < snows.length; s++) {
      console.log(snows)
      snows[s].display();
    }
    //  } 
     
     
      
  drawSprites();
  
}