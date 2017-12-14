var xAxis, yAxis, canvas, radius;
var invertColor = false;

function init(){
  xAxis = document.querySelector("#x");
  yAxis = document.querySelector("#y");
  canvas = document.getElementById("myCanvas");
  radius = document.getElementById("radius");

  var ctx = canvas.getContext("2d");

  canvas.addEventListener('mousemove', handleMouseMove, false);
  drawCircle();
}

function drawCircle() {

  var ctx = canvas.getContext("2d");            

  ctx.clearRect(0,0, canvas.width, canvas.height);

  var color = document.getElementById("color").value;
  if(invertColor){
    color = "#dddddd";
  }
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  console.log("color " + color);

  ctx.beginPath();            
  ctx.arc(xAxis.value, yAxis.value, radius.value, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  console.log("called drawCircle x= " + xAxis.value + " " + canvas.width);
}


function handleMouseMove(evt){
  var pos = getMousePos(canvas, evt);

  var ctx = canvas.getContext("2d");
  var isInPath = ctx.isPointInPath(pos.x, pos.y);
  console.log("is in path = " + isInPath);
  if(isInPath && !invertColor){
    invertColor = true;
    drawCircle();
    console.log("in circle.")                
  } else if (!isInPath && invertColor) {
    invertColor = false;
    drawCircle();
    console.log("out of circle.")
  }

}

function getMousePos(canvas, evt) {

  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

