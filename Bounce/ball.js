function Ball(xpos,ypos){
  this.x = xpos,
  this.y=ypos,
  this.dir=1,
  this.accel=.1,
  //this.speed=.9,
  this.adder=5,
  this.damper=1,
  
  this.move=function(){
    this.y=this.y+(this.accel)+(this.adder*this.dir);
    this.accel=(this.accel+.1)*this.damper;
    
    
  },
  this.drawBall = function(){
    noStroke();
    fill((255),0,100);
    ellipse(this.x,this.y,24,24);
    
  },
  this.bouncy = function(){
    if(this.y>height){
      this.dir=this.dir*-1;
      this.accel=.1;
      this.y=height-5;
      console.log(this.adder);
      //this.damper=this.damper*.9;
      //this.adder=this.adder*.9*-1;
    }
    
    
  }
  
} 