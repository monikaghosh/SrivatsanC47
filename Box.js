class Box{
    constructor(x,y,w,h){
       this.box = createSprite(x,y,w,h);
       this.box.shapeColor = "blue";
       this.infection = false;
    }    
}