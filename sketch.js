var ballsArray = [];


function setup() {
  createCanvas(400,400);
  background(20);
  
}
function mousePressed(){
  var ben = new Ball(mouseX,mouseY);
  ballsArray.push(ben);
  
}


function draw() {
  background(51)
  for(var j = 0; j<ballsArray.length;j++){
    ballsArray[j].drawBall();
    ballsArray[j].move();
    ballsArray[j].bouncy();
    
  }
    
}