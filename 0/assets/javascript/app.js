let canvas = document.getElementById("hello-world-canvas")
let context = canvas.getContext("2d");

// blue rectangle
context.fillStyle = "blue"
context.fillRect(10, 40, 30, 70);

// red rectangle
context.fillStyle = "red"
context.fillRect(50, 30, 20, 30)

// drawing a circle
context.beginPath();
context.fillStyle = "blue"
context.arc(250, 20, 20, 20, 30)
context.fill()


