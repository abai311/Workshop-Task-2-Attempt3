function setup() {
  createCanvas(400, 400);
    background(220);
}

function mousePressed(){
  setTimeout(makeHouse, 2000, random(0, width), random (0,height), 50, color(255,0,0))
  
}

function makeHouse(xPos, yPos, stories, color){
  fill(color);
  noStroke();
  rect(xPos, yPos, 50, stories);
  triangle(xPos, yPos, xPos + 25, yPos - 20, xPos + 50, yPos);
  
}