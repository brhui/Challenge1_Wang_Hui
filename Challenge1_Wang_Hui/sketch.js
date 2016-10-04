// Array and array values for color change
var col = [];
col[0] = 126;
col[1] = 200;
col[2] = 255;

//var i = col;

function setup() {
  createCanvas(400, 400);
  background("#DBD45C"); //yellow
}

function draw() {
  // If mouse is pressed, increment the array value
  if (mouseIsPressed) {
    for (var i = 0; i < 3; i++) {
      fill(col[i]);
      ellipse(200, 200, 50, 50);
      ellipse()
    }
  }
}