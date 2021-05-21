var mouseEvent="empty";
var lastPositionofx,lastPositionofy;



canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="limegreen";
widthof_line=10;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent=mouseDown;
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent=mouseUP;
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent=mouseleave;
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=widthof_line;
console.log("Last Position Of X And Y Coordinates=");
console.log("x="lastPositionofx+"y="+lastPositionofy);
ctx.moveTo(lastPositonofx,lastPositionofy);
console.log("Current Position Of X And Y Coordinates=");
console.log("x="currentPositionofx+"y="+currentPositionofy);
ctx.lineTo(currentPositionofx,currentPositionofy);
ctx.stroke();
}
lastPositionofx=currentPositionofx;
lastPositionofy=currentPositionofy
}
