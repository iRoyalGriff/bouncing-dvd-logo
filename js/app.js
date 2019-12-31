let speed = 20;
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let meatball = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    meatball.img.src = 'meatball.png';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(meatball.x, meatball.y, meatball.img.width*scale, meatball.img.height*scale);
        ctx.drawImage(meatball.img, meatball.x, meatball.y, meatball.img.width*scale, meatball.img.height*scale);
        //Move the logo
        meatball.x+=meatball.xspeed;
        meatball.y+=meatball.yspeed;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(meatball.x+meatball.img.width*scale >= canvas.width || meatball.x <= 0){
        meatball.xspeed *= -1;
        pickColor();
    }
        
    if(meatball.y+meatball.img.height*scale >= canvas.height || meatball.y <= 0){
        meatball.yspeed *= -1;
        pickColor();
    }    
}

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}
