var scaleValue = 1;
var canvasMax = 500;
function setup() {
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var myCanvas = createCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
  myCanvas.parent('canvasContainer');
}
function draw() {
  push();
  scale(scaleValue);
  background('#D6F5D6');
  fill(100,0,0);
  ellipse(50,50, 100,100);
  fill(255,0,0);
  ellipse(150,150, 200,200);
  pop();
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var cHeight = document.getElementById('canvasContainer').offsetHeight;
  scaleValue = min(canvasMax,cWidth)/canvasMax;
  resizeCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
}