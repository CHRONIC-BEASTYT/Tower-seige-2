class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   
  }

  display(){
   
    
    if(this.body.speed < 5){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 3;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
    
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }
};
