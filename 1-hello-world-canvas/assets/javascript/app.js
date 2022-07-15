const canvas = document.getElementById('hello-world-canvas');
const context = canvas.getContext('2d');


//Blue Rectangle
context.fillStyle = "blue"
context.fillRect(10, 40, 30, 70);


//Yellow Rectangle
context.fillStyle = "yellow"
context.fillRect(50, 30 , 20, 80)

//Red Rectangle
context.fillStyle = "red"
context.fillRect(50, 90, 100, 300)

