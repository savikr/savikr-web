// defining global variables
  var x1 = -100;
  var x2 = -100;
  var x3 = -100;
  var x4 = -100;
  var x5 = -100;
function setup() {
  num=2
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(1, 186,240);

  var size = 50;
  
  //rectangle 1
  if (x1<375){
    x1 = -100 + 0.5*frameCount;
  } else {
    x1 = 375;
  }
  fill(220,0,0);
  noStroke();
  rect(x1,50,size,size);
  
  //rectangle 2
  if (x2<375){
    x2 = -100 + 0.75*frameCount;
  } else {
    x2 = 375;
  }
  fill(219,119,20);
  noStroke();
  rect(x2,125,size,size);
  
  //rectangle 3
  if (x3<375){
    x3 = -100 + frameCount;
  } else {
    x3 = 375;
  }
  fill(251,251,60);
  noStroke();
  rect(x3,200,size,size);
  
  //rectangle 4
  if (x4<375){
    x4 = -100 + 1.25*frameCount;
  } else {
    x4 = 375;
  }
  fill(44,184,44);
  noStroke();
  rect(x4,275,size,size);
  
  //rectangle 5
  if (x5<375){
    x5 = -100 + 1.5*frameCount;
  } else {
    x5 = 375;
  }
  fill(25,60,235);
  noStroke();
  rect(x5,350,size,size);
  
}