
function setup() { //runs once
  createCanvas(windowWidth,windowHeight);
  fill (149, 185, 237);
  strokeWeight(1)
}

function draw() {//runs in a loop

var num=10;
  var sideLen = windowWidth/num;

  for (var y = 0;y < windowHeight; y = y + sideLen)
    for (var x = 0; x < windowWidth; x = x + sideLen)
  quad(x,y,
      x + sideLen, y,
      x + sideLen, y + sideLen,
      x, y + sideLen)

}
