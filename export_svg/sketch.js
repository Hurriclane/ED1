var pW = 11
var pH = 8.5

function setup() {
  createCanvas(pW * 72, pH * 72, SVG);
  strokeWeight (1);
  noFill();
  angleMode(DEGREES);

}

function draw(){
  background(230);

  translate(width / 2, height / 2 + 200);

  branch(100);
}

function branch (len){
  push();
  if (len > 10){
    strokeWeight (map(len, 10, 100, 1, 15));
    stroke(70, 40,20);
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(random(-20, -30));
    branch(len * random(0.7, 0.9));
    rotate(random(50,60));
    branch(len * random(0.7, 0.9));
  } else {
    var r = 163 + random(-20,20);
    var g = 25 + random(-20,20);
    var b = 10 + random(-20,20);
    stroke(r, g, b)

    beginShape()
    for (var i = 45; i < 135; i++){
         var rad = 15
         var x = rad * cos(i)
         var y = rad * sin (i)
         vertex(x, y)
         }
    for (var j = 135; j > 40; j--){
         var rad = 15
         var v = rad * cos(i)
         var w = rad * sin (i) + 20
         vertex(x, y);
         }
    endShape(CLOSE);
  }
  pop();

  save("Ghosttree.svg");
  print("saved svg")
  noLoop();

}
