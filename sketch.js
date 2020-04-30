//let canvas;
function preload () {
  brickImg = loadImage("Images/bricks.png");
  ballImg = loadImage("Images/foot.png");
  ballImg2 = loadImage("Images/foot2.png");
  imglose = loadImage("Images/lose.png");
  imgwin = loadImage("Images/win.png");
  backgroundImg = loadImage("Images/water.jpg");
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
  currentScene = 2;
  score = 0;
  lives = 3;
}
let startGame = function () {
  isPaused = false;
  ball = new Ball();
  paddle = new Paddle();
  levelManager();
  isStart = false;
  isOver = false;
}
let levelManager = function () {
  buildLevel(level1);
  // if (isLevelFinished) {
  //
  // }
}

let drawGame = function () {
  //imageMode(CENTER);
  //image(backgroundImg, 300, 300);
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
  } else if (currentScene === 2 && !isPaused) {
    scene2();
  } else if (currentScene === 3) {
    scene1();
    helpScene();
  } else if (currentScene === 4) {
    winScene();
  } else if (currentScene === 5) {
    loseScene();
  }

  if (isPaused) {
    background(0, 0, 0, 1.5);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("PAUSED", 300, 300);
  }

  calculateWinningAndLosingState();
  //togglePause();

  //console.log(frameRate());
//scene1();
//scene2();
//winScene();
//loseScene();
}

let togglePause = function () {
  if (currentScene === 2) {
    if (isPaused) {
      isPaused = false;
    } else {
      isPaused = true;
    }
  }
}
function mousePressed () {
  buttonsAction();
}
function keyPressed () {
  if (keyCode === 80) {
    togglePause();
  }
}
