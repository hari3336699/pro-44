var bg,bgImg;
var bottomgrnd;
var balloon,balloonImg;





function setup(){
    createCanvas(600,600)
    bg=createSprite(165,590,1,1);
    bg.addImage(bgImg);
    bg.scale=1.3;


    bottomgrnd=createSprite(200,590,800,20);
    bottomgrnd.visible=false;



    balloon=createSprite(100,200,20,50);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale=.2;
   

    


}
    
function preload() {
    bgImg=loadImage("assets/bg.png")
    balloonImg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")


   
    

    
}
function draw(){
    if(keyDown("UP_ARROW")){
        balloon.velocityY=-3;


    }
    
   
    balloon.velocityY = balloon.velocityY + 2;
    balloon.collide(bottomgrnd);
    if(keyDown("RIGHT_ARROW")){
        balloon.velocityX+=0.5
  }
    
    drawSprites()


}

