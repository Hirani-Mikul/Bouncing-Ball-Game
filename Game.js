// Ball Constructor
var Ball = function () {
    this.x = width/2;
    this.y = 500;
    this.r = 20;
    this.dx = 3;
    this.dy = 5;
}
Ball.prototype.update = function () {
  this.x += this.dx;
  this.y += this.dy;
}
Ball.prototype.checkEdges = function (p) {
  if (this.x > width - this.r/2 || this.x < this.r/2) {
    this.dx = -this.dx;
  } else if (this.y < this.r/2) {
    this.dy = -this.dy;
  }
 }
 Ball.prototype.show = function () {
   fill(0, 150, 255);
   noStroke();
   ellipse(this.x, this.y, this.r, this.r);
 }
 Ball.prototype.intersect = function (p) {
   return (this.x + this.r/2 > p.x - p.width/2 && this.x - this.r/2 < p.x + p.width/2 && this.y + this.r/2 > p.y - p.height/2 && this.y - this.r/2 < p.y + p.height/2);
 }

// Paddle Constructor
var Paddle = function () {
    this.x = width/2;
    this.y = height - 30;
    this.width = 100;
    this.height = 10;
    //this.dir = dir;
}
Paddle.prototype.update = function (dir) {
  if (this.x > width - this.width/2) {
    this.x = width - this.width/2;
  } else if (this.x < this.width/2)  {
    this.x = this.width/2;
  }
  this.x += dir;
}
Paddle.prototype.show = function () {
  fill(0, 0, 255);
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height);
}

// Bricks constructor
var Brick = function (x, y) {
  this.x = x;
  this.y = y;
  this.width = 80;
  this.height = 20;
  this.img = brickImg;
}
Brick.prototype.show = function () {
  imageMode(CENTER);
  image(brickImg, this.x, this.y, this.width, this.height);
};
