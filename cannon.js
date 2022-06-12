class Cannon {

    constructor(x,y,w,h,a){
        
        this.x = x 
        this.y = y
        this.width = w
        this.height = h
        this.angle = a
        this.cannonImage = loadImage("assets/canon.png")
        this.cannonBase = loadImage("assets/cannonBase.png")
        this.body = Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
    } 
    display(){
        //cannon top
        push()
        imageMode(CENTER)
        image(this.cannonImage,this.x,this.y,this.width,this.height)
        pop()
        
        //cannon bottom
        image(this.cannonBase,70,20,200,200)
        noFill()
    }

}