const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world
var plinkos=[]
var divisions=[]
var div,plin,part
var particles
var gamestate="start"
var score=0
var count=0

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

 for(var x=0; x<=800; x=x+80 ){
  div=new Ground(x,650,10,300)
  divisions.push(div)
 }
  ground=new Ground(400,795,800,10)

  for(var x=50;x<=790;x=x+50){
    plin=new Plinko(x,75)
    plinkos.push(plin)
   }
 
 for(var x=75;x<=800;x=x+50){
  plin=new Plinko(x,175)
  plinkos.push(plin)
 }

for(var x=50;x<=790;x=x+50){
  plin=new Plinko(x,275)
  plinkos.push(plin)
 }

for(var x=75;x<=800;x=x+50){
  plin=new Plinko(x,375)
  plinkos.push(plin)
 }
}
function draw() {
  background("black");  
  textSize(35);
  fill("white");
  text("500",10,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",330,550)
  text("100",410,550)
  text("100",490,550)
  text("200",570,550)
  text("200",650,550)
  text("200",730,550)
  text("SCORE: "+score,20,40)
  Engine.update(engine)
  if(gamestate==="end"){
    textSize(100)
    text("GAME_OVER",150,250)
  }


  if(particles!=null)
  {
    particles.display();
    if(particles.body.position.y>760)
    {
      if(particles.body.position.x<300){
        score=score+500;
        particles=null;
        if(count>= 5)gamestate="end"
      }

      else if(particles.body.position.x < 600&& particles.body.position.x> 301){
      score=score+100
      particles=null
      if(count>=5)gamestate="end"
      }
      else if(particles.body.position.x < 900&& particles.body.position.x> 601){
        score=score+200
        particles=null
        if(count>=5)gamestate="end"
        }
        
    }
  }
  for(var k=0; k<plinkos.length; k++){
    plinkos[k].display()
  }

          

  for(var k=0; k<divisions.length; k++){
    divisions[k].display()
  }
  ground.display()

  
}

function keyPressed(){
  if(gamestate!=="end"&&keyCode===32){
    count++
    particles=new Particle(random(100,700),10,10)
  }
}