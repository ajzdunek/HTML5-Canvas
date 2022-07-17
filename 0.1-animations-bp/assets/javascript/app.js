// Boilerplate for animations


window.onload = function () {

    const canvas = document.getElementById('animations-starting-point')
    const context = canvas.getContext('2d')













    window.requestAnimationFrame = (function(){
        return window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               function(callback){
               window.setTimeout(callback, 1000 / 60)
        };
    
    
    })();

};