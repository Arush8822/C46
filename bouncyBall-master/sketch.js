var bg;
var bgImg;

function preload(){
    bgImg = loadImage("city.jpeg");
}

function setup(){
    createCanvas(1200,900);

     bg = createSprite(1100,350);
     bg.addImage(bgImg);
     bg.scale = 2.45;
     ;

     bg.velocityX = 3;
}


function draw(){
    background(0);

    if(bg.x<50){
        bg.x = bg.width/2;
    }
    drawSprites();
}
