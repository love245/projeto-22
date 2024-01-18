const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

var options = {
  isStatic:true
};

playerBase = Bodies.rectangle(200, 350, 180, options);
World.add(word, playerBase);

player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
World.add(word, player);

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()ngine.update(engine)

  //exibir a imagem da base do jogador usando a função image()

 
  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.x, 180, 150)
  image(playerimage,player.position.x,player.x, 50, 180)


  

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
