let brickImg;
let ball, paddle, bricks;
let col = 5;
let row = 4;
function preload () {
  brickImg = loadImage("Images/bricks.png");
}
function setup() {
  createCanvas(600, 600);
  startGame();
}

let buildLevel = function (level) {
  bricks = [];
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (level[i][j] === 1) {
        let x = j * 120 + 58;
        let y = i * 30 + 50;
        bricks.push(new Brick(x, y, 1));
      }
    }
  }
}

let startGame = function () {
  ball = new Ball();
  paddle = new Paddle();
  buildLevel(level3);
}
let drawGame = function () {
  // Ball
  ball.show();
  ball.update();
  ball.checkEdges();

  if (ball.intersect(paddle)) {
      ball.dy = -ball.dy;
  }

  // Paddle
  let dir = 0;
  if (keyIsDown(37)) {
    dir = -7;
  } else if (keyIsDown(39)) {
    dir = 7;
  }

  paddle.show();
  paddle.update(dir);

  // Bricks
  for (var i = 0; i < bricks.length; i++) {
      bricks[i].show();
      if (!bricks[i].status) {
        bricks.splice(i, 1);
      }
  }
}
function draw() {
  background(100);
  drawGame();
}
function mousePressed () {
  for (var i = 0; i < bricks.length; i++) {
    bricks[i].status = false;
  }
}
