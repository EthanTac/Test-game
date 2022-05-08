const canvas = document.getElementById("GameArea");
const ctx = canvas.getContext("2d");
let score_txt = document.getElementById("score");


let x =100;
let y =100;
let radius = 50;
let speed = 5;
let score = 0;


let xc =Math.round(Math.random() * 700);
let yc =Math.round(Math.random() * 500);
let radiusc = 10;


let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function drawGame(){
    console.log("Draw");
    requestAnimationFrame(drawGame);
    inputs();
    clearScreen();
    drawCoin();
    drawGreenBlob();
    touchCoin();
    score_txt.innerText = "score :" + score;
}

function inputs(){
    if(downPressed){
        y += speed;
    }
    if(upPressed){
        y -= speed;
    }
    if(leftPressed){
        x -= speed;
    }
    if(rightPressed){
        x += speed;
    }
}

function drawCoin(){
    ctx.fillStyle = "yellow"
    ctx.beginPath();
    ctx.arc(xc,yc, radiusc,0, Math.PI * 2);
    ctx.fill();
}

function drawGreenBlob(){
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x-20, y-10, radius-40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x+20, y-10, radius-40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x-20, y-10, radius-45, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x+20, y-10, radius-45, 0, Math.PI * 2);
    ctx.fill();
}


function touchCoin(){
    if(xc <= x + radius*2 && xc + radiusc*2 >= x && yc <= y + radius*2 && yc + radiusc*2 >= y){
        xc =Math.round(Math.random() * 700);
        yc =Math.round(Math.random() * 500);
        score ++;
    }
}



function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp)

function keyDown(){
    if(event.keyCode == 40){
        downPressed = true;
    }
    if(event.keyCode == 38){
        upPressed = true;
    }
    if(event.keyCode == 37){
        leftPressed = true;
    }
    if(event.keyCode == 39){
        rightPressed = true;
    }
}

function keyUp(){
    if(event.keyCode == 40){
        downPressed = false;
    }
    if(event.keyCode == 38){
        upPressed = false;
    }
    if(event.keyCode == 37){
        leftPressed = false;
    }
    if(event.keyCode == 39){
        rightPressed = false;
    }
}

drawGame();
