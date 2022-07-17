window.onload = function () {

    const canvas = document.getElementById('bouncing-ball')
    const context = canvas.getContext('2d')


let ballX = 400;
let ballY = 300;
let ballRadius = 30; // size
let ballColor = 'green';
let changeX = 6; // speed of x
let changeY = 6; // speed of y


// drawBall(ballX, ballY, ballRadius, ballColor)


window.requestAnimationFrame(ballLoop)

function ballLoop(){

// Clear Canvas
context.clearRect(0, 0, canvas.width, canvas.height)




// Update --------------------------------------------
if (ballY + ballRadius > canvas.height){ // bottom edge
    changeY *= -1;
} 

if (ballX + ballRadius > canvas.width){ // right edge
    changeX *= -1;
}

if (ballY - ballRadius < 0) { // top edge
    changeY *= -1;
}

if (ballX - ballRadius < 0) { // left edge
    changeX *= -1;
}


ballX += changeX;
ballY += changeY;

// Update --------------------------------------------




// Draw
drawBall(ballX, ballY, ballRadius, ballColor)

// Animate
window.requestAnimationFrame(ballLoop)

}


// Our ball
function drawBall(x, y, radius, color){

    let radian = Math.PI / 180;

    context.beginPath();
    context.strokeStyle = color;
    context.fillStyle = color;
    context.arc(x, y, radius, 0, 360 * radian, false) // <-- Pay attention to this
    context.stroke();
    context.fill();
}





    window.requestAnimationFrame = (function(){

        return window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               function (callback){
                 window.setTimeout(callback, 1000 / 60);
               };
    })();

};
