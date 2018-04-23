function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(250);
}