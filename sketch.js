function preload () {
  brickImg = loadImage("Images/bricks.png");
  ballImg = loadImage("Images/foot.png");
  ballImg2 = loadImage("Images/foot2.png");
}
function setup() {
  createCanvas(600, 600);
  //startGame();
  createButton();
}

let startGame = function () {
  ball = new Ball();
  paddle = new Paddle();
  buildLevel(level2);
}

let drawGame = function () {
  drawBall();
  drawPaddle();
  drawBricks();
  renderScoreAndLive();

}
function draw() {
  //background(100);
  //drawGame();
  scene1();
}
function mousePressed () {
  buttonsAction();
}
