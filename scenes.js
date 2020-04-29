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

let textScreen1 = function () {
  textSize(40);
  fill(255, 0, 0);
  text("°°°·.°·..·°¯°·._.· ʷᗴｌⓒᵒ𝓂ᵉ ·._.·°¯°·.·° .·°°°", 300, 50);

  fill(20, 41, 227);
  text("꧁꧁Ħ𝓪𝓥乇 Ƒυ𝓝!!!!꧂꧂", 300, 150);

  fill(200, 100, 0);
  stroke(0, 0, 255);
  strokeWeight(2);
  text("E   ҉   n   ҉   j   ҉   o   ҉   y   ҉", 300, 250);
}
let scene1 = function () {
  currentScene = 1;
  background(19, 205, 212, 100);
  spinningBall();
  drawButtons();
  textScreen1();
}
let scene2 = function () {
  currentScene = 2;
  background(100);
  drawGame();
}
let winScene = function () {
  background(100);
}
