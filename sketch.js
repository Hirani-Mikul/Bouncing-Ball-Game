//let canvas;
function preload () {
  brickImg = loadImage("Images/bricks.png");
  ballImg = loadImage("Images/foot.png");
  ballImg2 = loadImage("Images/foot2.png");
  imglose = loadImage("Images/lose.png");
  imgwin = loadImage("Images/win.png");
}
function setup() {
  createCanvas(600, 600);
  startGame();
  createButtons();
  canvas = createGraphics(200, 300);
  canvas.clear();
}
let restartGame = function () {
  startGame();
  score = 0;
  lives = 3;
}
let startGame = function () {
  ball = new Ball();
  paddle = new Paddle();
  levelManager();
  isStart = false;
  isOver = false;
}
// let levelManager = function () {
//   buildLevel(level5);
//   if (isLevelFinished) {
//
//   }
// }

let drawGame = function () {
  textFont("gabriola", 100);
  btn5.show(80, 570);
  btn7.show(500, 570);
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
  } else if (currentScene === 3) {
    scene1();
    helpScene();
  } else if (currentScene === 4) {
    winScene();
  } else if (currentScene === 5) {
    loseScene();
  }

  calculateWinningState();

  //console.log(frameRate());
//scene1();
//scene2();
//winScene();
//loseScene();
}
function mousePressed () {
  buttonsAction();
}
