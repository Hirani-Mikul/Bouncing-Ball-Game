function preload () {
  brickImg = loadImage("Images/bricks.png");
  ballImg = loadImage("Images/foot.png");
  ballImg2 = loadImage("Images/foot2.png");
}
function setup() {
  createCanvas(600, 600);
  startGame();
  createButtons();
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
//scene1();
function draw() {
  if (currentScene === 1) {
    scene1();
  } else if (currentScene === 2) {
    scene2();
  }
//scene1();
}
function mousePressed () {
  if (currentScene === 1) {
    buttonsAction();
  }
}
