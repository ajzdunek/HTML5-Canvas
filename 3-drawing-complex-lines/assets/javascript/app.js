window.onload = function () {

const canvas = document.getElementById('drawing-lines');
const context = canvas.getContext('2d')


// Draw multiple line steps - preferred way - DRY (Don't Repeat Yourself)
context.beginPath(); // reset the context state
context.moveTo(30, 30); // moveTo(x, y) -> starting point of the line
context.lineTo(80, 80); // line (x, y) -> end point of the line
context.lineTo(130, 30); // line (x, y) -> end point of the line
context.lineTo(180, 80); // line (x, y) -> end point of the line
context.lineTo(230, 30); // line (x, y) -> end point of the line
context.stroke(); // draws line

// Don't do this ⬇️
    
// Draw line steps
// context.beginPath(); // reset the context state
// context.moveTo(80, 80); // moveTo(x, y) -> starting point of the line
// context.lineTo(130, 30); // line (x, y) -> end point of the line
// context.stroke(); // draws line

// Draw line steps
// context.beginPath(); // reset the context state
// context.moveTo(130, 30); // moveTo(x, y) -> starting point of the line
// context.lineTo(180, 80); // line (x, y) -> end point of the line
// context.stroke(); // draws line

// Draw line steps
// context.beginPath(); // reset the context state
// context.moveTo(180, 80); // moveTo(x, y) -> starting point of the line
// context.lineTo(230, 30); // line (x, y) -> end point of the line
// context.stroke(); // draws line



}


