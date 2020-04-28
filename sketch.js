function preload () {
  brickImg = loadImage("Images/bricks.png");
}
function setup() {
  createCanvas(600, 600);
  startGame();
}

let startGame = function () {
  ball = new Ball();
  paddle = new Paddle();
  buildLevel(level1);
}

let drawGame = function () {
  drawBall();
  drawPaddle();
  drawBricks();
  renderScoreAndLive();

}
function draw() {
  background(100);
  drawGame();
}
