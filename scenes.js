let spinningBall = function () {
  push();
  translate(x, y);
  rotate(angle);
  imageMode(CENTER);
  image(ballImg2, 0, 0)
  angle+= 0.02;

  let ballWidth = ballImg2.width/2.5; // Half Of The Ball Image Width
  let ballHeight = ballImg2.height/3; // Half Of The Ball Image Height
  // CheckEdges
    if (x > width - ballWidth || x < ballWidth) {
      dx = -dx;
    } else if (y > height - ballHeight || y < ballHeight) {
      dy = -dy;
    }
    x += dx;
    y += dy;
  pop();
}
let scene1 = function () {
  background(119, 125, 212);
  currentScene = 1;
  spinningBall();
  drawButtons();
}
