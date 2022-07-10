// Our starting point 
const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

// What do we want after our starting point    
context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';


// What we want to appear
context.fillText('Hello Canvas', canvas.width/2 - 150, canvas.height/2 + 15);

context.strokeText('Hello Canvas', canvas.width/2 - 150, canvas.height/2 - +15);
