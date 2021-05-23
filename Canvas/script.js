let canvas  = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;


canvas.style.background = "rgb(56,220, 250)";
canvas.width = window_width;
canvas.height = window_height;

context.fillRect(100,0,100,100);
context.fillStyle = 'red';
context.fillRect(100,500,100,100);

context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 20;
context.arc(300,100,50,0,Math.PI*2,false);
context.stroke();
context.closePath();
