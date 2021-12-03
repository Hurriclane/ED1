
let gif;

function preload (){
  gif = loadImage ('assets/aiBG1.gif');
}

function setup() { //runs once
  createCanvas(windowWidth, windowHeight);
  fill('indigo');
  strokeWeight(1);
}

function draw() {
background(160, 189, 242)
var num = 10; //variable for the number of squares in the array
var sideLen = windowWidth/num;//variable for the side lenth of each square

  for (var y = 0; y < windowHeight; y = y + sideLen) {//loop to create rows in the y direction
     for (var x = 0; x < windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction0
image (gif, x, y);
  }
}

//noLoop ();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
