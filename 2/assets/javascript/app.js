// Our starting point 
const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");


function drawGrid(strokeStyle, fillStyle){

controlContext.save();

controlContext.fillStyle = fillStyle;
controlContext.strokeStyle = strokeStyle;


controlContext.restore();

}

drawGrid();